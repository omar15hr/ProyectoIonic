import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit() {
    this.cargarUsuario();
  }


  async cargarUsuario(){
    this.usuario = await this.storage.obtenerUsuario();
    console.log("USUARIOS REGISTRADOS",this.usuario);

    this.usuarioFiltro = this.usuario.filter((e: { correo: string; }) => e.correo == this.storage.correoUsuario);
    console.log("USUARIO FILTRADOS", this.usuarioFiltro);
    

    
  }

}
