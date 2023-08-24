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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    if (this.usuario == "") {
      alert("Debe ingresar un usuario");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña");
      return;
    }

    if (this.usuario == "admin" && this.contrasena == "123") {
      //alert("Login correcto");
      this.router.navigateByUrl('menu');
    } else if ( this.usuario.includes('profesor') && this.contrasena == "123" ) {
      this.router.navigateByUrl('menu-docente');
    } else if ( this.usuario.includes('alumno') && this.contrasena == "123" ) {
      this.router.navigateByUrl('menu-alumno');
    }
    else{
      alert("Usuario o contraseña incorrecta.")
    }
    
    }

  cambiarPassword(){
    this.router.navigateByUrl('cambiar-password');
  }

  recuperarPassword(){
    this.router.navigateByUrl('recuperar-password');
  }
}
