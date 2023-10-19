import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  usuario:any;
  usuarioFiltro:any;

  constructor(
    private storage:StorageService,
    private auth:AngularFireAuth
  ) { }

  ngOnInit() {
    this.cargarUsuario();
  }


  async cargarUsuario(){
    this.usuario = await this.storage.obtenerUsuario();
    

    let emailUserToken = await this.auth.currentUser;
    this.usuarioFiltro = emailUserToken?.email
    return this.usuarioFiltro
    
    // this.usuarioFiltro = this.usuario.filter((e: { correo: string; }) => e.correo == emailUserToken?.email);
  }

}
