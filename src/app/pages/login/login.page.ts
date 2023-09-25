import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";

  constructor( 
    private router:Router, 
    private helper:HelperService, 
    private toastCtrl: ToastController,
    private auth:AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async onLogin() {

    const loader = await this.helper.showLoader("Cargando");

    // USUARIO NO INGRESA NINGUN DATO
    if (this.usuario == "") {
      await loader.dismiss();
      this.helper.showAlert( "Debe ingresar un usuario", "Error", "Campo obligatorio" )
      return;
    }
    if (this.contrasena == "") {
      await loader.dismiss();
      this.helper.showAlert( "Debe ingresar una contraseña", "Error", "Campo obligatorio" )
      return;
    }
    
    // USUARIO INGRESA CON DATOS CORRECTOS
    try {
      await this.auth.signInWithEmailAndPassword(this.usuario,this.contrasena);
      await loader.dismiss();
      var idCuenta = this.usuario;
      this.router.navigateByUrl('menu-principal/' + idCuenta);

      // USUARIO INGRESA CON CORREO INVALIDO O CONTRASEÑA MUY CORTA
    } catch (error:any) {
      if (error.code == 'auth/invalid-email' || error.code == 'auth/user-not-found' ) {
        await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error","No pudo ingresar");
      }
      if (error.code == 'auth/weak-password') {
        await loader.dismiss();
        await this.helper.showAlert("El largo de la contraseña es muy corto.","Error","No pudo ingresar");
      }
    }

  }

    // REGISTRARSE
    Registrarse(){
    this.router.navigateByUrl('register');
  }

  // RECUPERAR CONTRASEÑA
  recuperarPassword(){
    this.router.navigateByUrl('recuperar-password');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Sesión iniciada correctamente.',
      duration: 2000
    });
    toast.present();
  }

  












}




