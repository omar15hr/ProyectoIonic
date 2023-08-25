import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";

  constructor( private router:Router, private helper:HelperService ) { }

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

      // USUARIO INGRESA COMO PROFESOR
    } else if ( this.usuario.includes('@profesor') && this.contrasena == "123" ) {
      this.router.navigateByUrl('menu-docente');

    // USUARIO INGRESA COMO ALUMNO
    } else if ( this.usuario.includes('@alumno') && this.contrasena == "123" ) {
      this.router.navigateByUrl('menu-alumno');

    }
    // USUARIO INGRESA DATOS INCORRECTOS
    else{
      alert("Usuario o contraseña incorrecta.")
    }

  }



    // CAMBIO DE CONTRASEÑA
  cambiarPassword(){
    this.router.navigateByUrl('cambiar-password');
  }

  // RECUPERAR CONTRASEÑA
  recuperarPassword(){
    this.router.navigateByUrl('recuperar-password');
  }

}




