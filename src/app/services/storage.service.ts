import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from './helper.service';

interface Asistencia {
  asignatura: string;
  docente: string;
  fecha: string;
  hora: string;
  leccion: string;
  sala: string;
  seccion: string;
}

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

  objetoExistente = ( objetoNuevo: Asistencia , array: Asistencia[] ) => array.some( asistencia => asistencia.asignatura === objetoNuevo.asignatura && asistencia.fecha === objetoNuevo.fecha)


  async guardarUsuario( usuario:any[] ) {
    const usersStorage = await this.obtenerUsuario();

    // Procesar los nuevos objetos
    for (const i of usersStorage) {
      usersStorage.forEach((i: any) => {

        if (this.objetoExistente(i, usersStorage)) {
          this.helper.showAlert( "El estudiante ya ha registrado asistencia para un objeto similar.", "Error", "No se pudo agregar asistencia" )
        
        } else {
          usuario.push(i);
          this.helper.showAlert( "Asistencia registrada con éxito para un nuevo objeto.", "Exitoso", "Asistencia Registrada")
        }
      });
    }

    this.setItem( keyStorageUser, JSON.stringify( usuario ) )
  }
}
