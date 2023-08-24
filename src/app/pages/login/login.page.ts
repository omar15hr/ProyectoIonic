import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  onLogin() {

    // USUARIO NO INGRESA NINGUN DATO
    if (this.usuario == "") {
      alert("Debe ingresar un usuario");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña");
      return;
    }


    // USUARIO INGRESA COMO ADMIN
    if (this.usuario == "admin" && this.contrasena == "123") {
      this.router.navigateByUrl('menu');

      // USUARIO INGRESA COMO PROFESOR
    } else if ( this.usuario.includes('profesor') && this.contrasena == "123" ) {
      this.router.navigateByUrl('menu-docente');

    // USUARIO INGRESA COMO ALUMNO
    } else if ( this.usuario.includes('alumno') && this.contrasena == "123" ) {
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




