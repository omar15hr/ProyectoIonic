import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from './helper.service';
import { Asistencia } from '../models/asistencia';

let validacionValores: string;
let validacionAsistencia: string;

const keyStorageUsuario = "usuarioData";
const keyStorageAsistencia = "asistenciaData";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public correoUsuario:string = "";

  constructor(private helper: HelperService) { }

  async getItem( llave:string ):Promise<string | null> {
    const obj = await Preferences.get({ key:llave });
    return obj.value;
  }

  async setItem( llave:string, valor:string ) {
    await Preferences.set({ key:llave, value:valor });
  }

  // Funcion para obtener usuario de los registros a la app
  async obtenerUsuario(){
    const usuarios = await this.getItem( keyStorageUsuario );

    if ( usuarios == null ) {
      return [];
    }

    const users = JSON.parse( usuarios );

    if ( users ) {
      return users;
    }
    else
    {
      return [];
    }
  }

  // Funcion para obtener las asistencias del localStorage
  async obtenerAsistencia(){
    const usuarios = await this.getItem( keyStorageAsistencia );

    if ( usuarios == null ) {
      return [];
    }

    const users = JSON.parse( usuarios );

    if ( users ) {
      return users;
    }
    else
    {
      return [];
    }
  }

  // Funcion para obtener el valor de la propiedad
  obtenerValorPropiedad(objeto: any, propiedad1: string, propiedad2:string): any {
    if (objeto.hasOwnProperty(propiedad1) && objeto.hasOwnProperty(propiedad2)) {
      return objeto[propiedad1] + objeto[propiedad2]
    }
  }

  // Funciona para guardar registro de usuario a la app y storage
  async guardarUsuario( usuario:any[] ) {
    const usersStorage = await this.obtenerUsuario();

    for (const i of usersStorage) {
      if (i) {
        usuario.push(i);
      }
    }

    this.setItem( keyStorageUsuario, JSON.stringify( usuario ) )
  }

  // Funcion para guardar registro de asistencia en el storage
  async guardarAsistencia( asistencia:Asistencia[] ) {
    const usersStorageAsistencia = await this.obtenerAsistencia();

    for (const i of usersStorageAsistencia) {
      for (const i of usersStorageAsistencia) {
        validacionValores = this.obtenerValorPropiedad(i,"fecha","asignatura")
  
        let agregarAsistencia = true;
  
        for (const j of asistencia) {
          validacionAsistencia = this.obtenerValorPropiedad(j,"fecha","asignatura")
  
          if(validacionValores === validacionAsistencia) {
            agregarAsistencia = false;
            break;
          } else {
            agregarAsistencia = true;
          }
        }
  
        if (agregarAsistencia) {
          asistencia.push(i);
        } else {
          await this.helper.showAlert("La asistencia ya existe", "Error", "No pudo ingresar asistencia");
        }
      }
    }

    this.setItem( keyStorageAsistencia, JSON.stringify( asistencia ) )
  }
}