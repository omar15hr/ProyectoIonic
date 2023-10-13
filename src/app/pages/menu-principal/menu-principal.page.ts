import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';

import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  parametroIdCuenta: string | undefined;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private router:Router, 
    private helper:HelperService,
    private storage:StorageService,
    private auth:AngularFireAuth
  ) {}

  ngOnInit() {
    setTimeout(() => { this.loaded = true; }, 2000);
    /*this.parametroIdCuenta = this.activatedRoute.snapshot.params['idCuenta'];*/
    this.parametroIdCuenta = this.storage.correoUsuario;
    this.cargaUsuario();
  }

  //Variable para el skeleton
  public loaded = false;

  async logout(){
    
    var confirm = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if(confirm == true ) {
      this.router.navigateByUrl("login");
      await this.auth.signOut();
    }
  }


  async cargaUsuario(){
    console.log( "usuarios", await this.storage.obtenerUsuario() );
  }

}
