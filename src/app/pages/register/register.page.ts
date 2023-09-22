import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from '../../services/storage.service';

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

  constructor( 
    private router:Router, 
    private helper:HelperService,
    private auth:AngularFireAuth,
    private storage:StorageService
    ) { }

  ngOnInit() {
  }


  // Funcion para registrar al usuario con correo y contraseña
  async registro(){


    // Objeto usuario
    let user = 
    [
      {
        correo: this.email,
        contrasena: this.contrasena
      }
    ]

    try {
    const request = await this.auth.createUserWithEmailAndPassword( this.email, this.contrasena );
    this.storage.guardarUsuario( user );

    await this.router.navigateByUrl('login');
    // await loader.dismiss(); 
    await this.helper.showAlert("Usuario registrado correctamente","Información","Registrado");  
    } catch (error:any) {
      if (error.code == 'auth/email-already-in-use') {
        // await loader.dismiss();
        await this.helper.showAlert("El correo ya se encuentra registrado.","Error","No Registrado");
      }
      if (error.code == 'auth/invalid-email') {
        // await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error","No Registrado");
      }
    }    
    
  }

}
