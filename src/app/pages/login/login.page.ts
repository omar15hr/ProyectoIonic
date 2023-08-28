import { Component, OnInit } from '@angular/core';
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


  constructor( private router:Router, private helper:HelperService, private toastCtrl: ToastController ) { }

  ngOnInit() {
  }

  onLogin() {

    // USUARIO NO INGRESA NINGUN DATO
    if (this.usuario == "") {
      this.helper.showAlert( "Debe ingresar un usuario", "Error", "Campo obligatorio" )
      return;
    }
    if (this.contrasena == "") {
      this.helper.showAlert( "Debe ingresar una contraseña", "Error", "Campo obligatorio" )
      return;
    }


    // USUARIO INGRESA COMO ADMIN
    if (this.usuario == "admin" && this.contrasena == "123") {
      this.router.navigateByUrl('menu');
      this.presentToast();

      // USUARIO INGRESA COMO PROFESOR
    } else if ( this.usuario.includes('@profesor') && this.contrasena == "123" ) {
      this.router.navigateByUrl('menu-docente');
      this.presentToast();

    // USUARIO INGRESA COMO ALUMNO
    } else if ( this.usuario.includes('@alumno') && this.contrasena == "123" ) {
      this.router.navigateByUrl('menu-alumno');
      this.presentToast();

    }
    // USUARIO INGRESA DATOS INCORRECTOS
    else{
      this.helper.showAlert( "Usuario y/o contraseña no existen", "Error", "Datos ingresados no validos" )
      return;
      //alert("Usuario o contraseña incorrecta.")
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




