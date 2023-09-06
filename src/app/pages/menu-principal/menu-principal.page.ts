import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor( private helper:HelperService, private router:Router ) { }

  ngOnInit() {
    setTimeout(() => { this.loaded = true; }, 2000);
  }

  //Variable para el skeleton
  public loaded = false;

  //Funcion asincrona para el logout con el alert
  async logout(){
    var confirm = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if( confirm == true ) {
      this.router.navigateByUrl("login");
    } else {
      this.router.navigateByUrl("menu-principal");
    }
  }

}
