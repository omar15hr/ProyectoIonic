import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre:string = "";
  apellido:string = "";
  contrasena:string = "";
  contrasena2:string = "";
  email:string = "";

  constructor(private router:Router, private helper:HelperService) { }

  ngOnInit() {
  }

  Registrarse(){
    // USUARIO NO INGRESA NINGUN DATO
    if (this.nombre == "") {
      this.helper.showAlert( "Debe ingresar un nombre", "Error", "Campo obligatorio" )
      return;
    }

    if (this.apellido == "") {
      this.helper.showAlert( "Debe ingresar un apellido", "Error", "Campo obligatorio" )
      return;
    }

    if (this.email == "") {
      this.helper.showAlert( "Debe ingresar un email", "Error", "Campo obligatorio" )
      return;
    }

    if (this.contrasena == "") {
      this.helper.showAlert( "Debe ingresar una contraseña", "Error", "Campo obligatorio" )
      return;
    }

    if (this.contrasena2 == "") {
      this.helper.showAlert( "Debe volver a ingresar su contraseña", "Error", "Campo obligatorio" )
      return;
    }

    if (this.contrasena != this.contrasena2) {
      this.helper.showAlert( "Las contraseñas no coinciden, vuelva a intentarlo", "Error", "Campos no coinciden" )
      return;
    }

    else{
      this.router.navigateByUrl('login');
    }
    
  }

    

}
