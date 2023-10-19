import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from './helper.service';

let validacionValores: string;
let validacionUsuario: string;
let nuevoUsuario: any[]

const keyStorageUser = "usuarioData";

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

  async obtenerUsuario(){
    const usuarios = await this.getItem( keyStorageUser );

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

  async guardarUsuario( usuario:any[] ) {
    const usersStorage = await this.obtenerUsuario();

    for (const i of usersStorage) {
      validacionValores = this.obtenerValorPropiedad(i,"fecha","asignatura")

      let agregarUsuario = true;

      for (const j of usuario) {
        validacionUsuario = this.obtenerValorPropiedad(j,"fecha","asignatura")

        if(validacionValores === validacionUsuario) {
          agregarUsuario = false;
          break;
        } else {
          agregarUsuario = true;
        }
      }

      if (agregarUsuario) {
        usuario.push(i);
        console.log(usuario);
      } else {
        await this.helper.showAlert("La asistencia ya existe", "Error", "No pudo ingresar asistencia");
      }
    }

    this.setItem( keyStorageUser, JSON.stringify( usuario ) )
  }
}
