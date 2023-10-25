import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  usuarios:any;

  constructor(
    private storage:StorageService,
    private auth:AngularFireAuth
  ) { }

  ngOnInit() {
    this.cargarUsuario();
  }


  async cargarUsuario(){
    const actualUser = await this.auth.currentUser;
    this.usuarios = (await this.storage.obtenerUsuario()).filter(e => e.correo === actualUser?.email!);
  }

}
