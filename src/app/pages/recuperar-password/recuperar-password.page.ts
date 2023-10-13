import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  correo:string = "";

  constructor(
    private router:Router, 
    private helper:HelperService,
    private auth:AngularFireAuth,
    private toastCtrl:ToastController
    ) { }

  ngOnInit() {
  }

  async recuperarPassword(){

    const loader = await this.helper.showLoader("Cargando");

    // USUARIO NO INGRESA NINGUN DATO
    if (this.correo == '') {
      await loader.dismiss();
      this.helper.showAlert( "Debe ingresar un correo", "Error", "Campo obligatorio" );
      return;
    }

    // USUARIO INGRESA CON DATOS CORRECTOS
    try {
      await this.auth.sendPasswordResetEmail(this.correo);
      await this.helper.showAlert2("Email enviado, debe revisar su correo para cambiar contraseña","Información");
      await loader.dismiss();
      await this.router.navigateByUrl("login");

    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.helper.showAlert2("El correo no es el correcto.","Error");
      }
    }
  }

}
