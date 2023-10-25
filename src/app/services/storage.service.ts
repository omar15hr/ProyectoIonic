import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from './helper.service';
import { Asistencia } from '../models/asistencia';
import { Usuario } from '../models/usuario';

let validacionValores: string;
let validacionAsistencia: string;

const storageUsuario = 'usuarioData';
const storageAsistencia = 'asistenciaData';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public correoUsuario:string = "";

  constructor(private helper: HelperService) { }

  async getItem( llave:string ):Promise<string | null> {
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem( llave:string, valor:string ) {
    await Preferences.set({key:llave,value:valor});
  }

  // Funcion para obtener usuario de los registros a la app
  async obtenerUsuario():Promise<Usuario[]>{
    const usuarios = await this.getItem( storageUsuario );

    if ( usuarios == null ) {
      return [];
    }

    const users:any[] = JSON.parse( usuarios );

    if ( users ) {
      return users;
    }
    else
    {
      return [];
    }
  }

  // Funciona para guardar registro de usuario a la app y storage
  async guardarUsuario( usuario:Usuario[] ) {
    const usersStorage = await this.obtenerUsuario();

    for (const i of usersStorage) {
      if (i) {
        usuario.push(i);
      }
    }

    this.setItem(storageUsuario,JSON.stringify(usuario))
  }


  // Funcion para obtener las asistencias del localStorage
  async obtenerAsistencia():Promise<Asistencia[]> {
    const asistencias = await this.getItem( storageAsistencia );

    if ( asistencias == null ) {
      return [];
    }

    const asis:any[] = JSON.parse( asistencias );

    if ( asis ) {
      return asis;
    }
    else
    {
      return [];
    }
  }

  // Funcion para guardar registro de asistencia en el storage
  async guardarAsistencia( asistencia:Asistencia[] ) {
    const usersStorageAsistencia = await this.obtenerAsistencia();

    for (const i of usersStorageAsistencia) {
      if (i) {
        asistencia.push(i)
      }
    }
    this.setItem(storageAsistencia,JSON.stringify(asistencia))
  }

}
