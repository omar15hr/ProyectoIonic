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
      const req = await this.locationService.getComuna(this.regionSel);
      this.comunas = req.data;
      this.disabledComuna = false;
    } catch (error:any) {
      await this.helper.showAlert(error.error.msg, "Error", "No se pudo ingresar")
    }
  };


  // Funcion para registrar al usuario con correo y contraseña
  async registro(){
    // Cambio de id a nombre de region y comuna
    const regionFiltrada = this.regiones.filter((regiones) => regiones.id === this.regionSel);
    const nombreRegion = regionFiltrada[0].nombre;
    
    const comunaFiltrada = this.comunas.filter((comunas) => comunas.id === this.comunaSel);
    const nombreComuna = comunaFiltrada[0].nombre;

    // Objeto usuario
    let user = 
    [
      {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.email,
        email: this.email,
        contrasena: this.contrasena,
        contrasena2: this.contrasena2,
        regionSel: nombreRegion,
        comunaSel: nombreComuna
      }
    ]

    // Validar nombre vacio
    if (this.nombre == "") {
      await this.helper.showAlert("El nombre es obligatorio", "Error", "No Registrado");
      return;
    }

    // Validar largo nombre
    if (this.nombre.length >= 20) {
      await this.helper.showAlert("El nombre supera el máximo de carácteres(19)", "Error", "No Registrado");
      return;
    }

    // Validar apellido vacio
    if (this.apellido == "") {
      await this.helper.showAlert("El apellido es obligatorio", "Error", "No Registrado");
      return;
    }

    // Validar largo apellido
    if (this.apellido.length >= 20) {
      await this.helper.showAlert("El apellido supera el máximo de carácteres(19)", "Error", "No Registrado");
      return;
    }

    // Validar email vacio
    if (this.email == "") {
      await this.helper.showAlert("El email es obligatorio", "Error", "No Registrado");
      return;
    }

    // Validar contraseña vacia
    if (this.contrasena == "") {
      await this.helper.showAlert("La contraseña es obligatorio", "Error", "No Registrado");
      return;
    }

    // Validar largo contraseñas
    if (this.contrasena.length >= 20) {
      await this.helper.showAlert("Las contraseñas superan el máximo de carácteres(19)", "Error", "No Registrado");
      return;
    }

    // Validar contraseñas iguales
    if (this.contrasena != this.contrasena2) {
      await this.helper.showAlert("Las contraseñas no coinciden", "Error", "No Registrado");
      return;
    }

    // Validar region
    if (this.regionSel == 0) {
      await this.helper.showAlert("La región es obligatoria", "Error", "No Registrado");
      return;
    }

    // Validar comuna
    if (this.comunaSel == 0) {
      await this.helper.showAlert("La comuna es obligatoria", "Error", "No Registrado");
      return;
    }

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
        await this.helper.showAlert("El correo no es un correo valido.","Error","No Registrado");
      }
      if (error.code == 'auth/weak-password') {
        // await loader.dismiss();
        await this.helper.showAlert("La contraseña debe tener minimo 6 caracteres","Error","No Registrado");
      }
    }
    
  }

}
