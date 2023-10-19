import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

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
    private auth:AngularFireAuth,
    private storage:StorageService,
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
      const req = await this.auth.signInWithEmailAndPassword(this.usuario,this.contrasena);
      this.storage.correoUsuario = this.usuario;
      await loader.dismiss();
      this.router.navigateByUrl('menu-principal');

      // USUARIO INGRESA CON CORREO INVALIDO O CONTRASEÑA MUY CORTA
    } catch (error:any) {
      if (error.code == 'auth/invalid-email' || error.code == 'auth/user-not-found' ) {
        await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error","No pudo ingresar");
      }
      if(error.code == 'auth/wrong-password'){
        await loader.dismiss();
        await this.helper.showAlert("La contraseña no es la correcta.","Error","No pudo ingresar");
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
}
