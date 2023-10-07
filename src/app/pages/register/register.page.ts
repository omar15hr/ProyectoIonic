import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from '../../services/storage.service';


import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { LocationService } from 'src/app/services/location.service';

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

  regiones:Region[]=[];
  comunas:Comuna[]=[];
  regionSel:number = 0;
  comunaSel:number = 0;

  disabledComuna:boolean = true;

  constructor( 
    private router:Router, 
    private helper:HelperService,
    private auth:AngularFireAuth,
    private storage:StorageService,
    private locationService:LocationService
    ) { }

  ngOnInit() {
    this.cargarRegion();
  }

  //Funcion para cargar la region
  async cargarRegion(){
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
  };

  //Funcion para cargar la comuna
  async cargarComuna(){
    try {
      const { data } = await this.locationService.getComuna(this.regionSel);
      this.comunas = data;
      this.disabledComuna = false;
      
    } catch (error:any) {
      await this.helper.showAlert(error.error.msg, "Error", "No se pudo ingresar")
    }

  };


  // Funcion para registrar al usuario con correo y contraseña
  async registro(){


    // Objeto usuario
    let user = 
    [
      {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.email,
        contrasena: this.contrasena
      }
    ]

    try {
    const req = await this.auth.createUserWithEmailAndPassword( this.email, this.contrasena );

    this.storage.guardarUsuario( user );

    //Navegación luego de registrarse
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
