import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
=======
import { ActivatedRoute, Router } from '@angular/router';
//import { Menu } from 'src/app/models/menu';
>>>>>>> 41e42de9fc67ffe1516a7945a65fe2a23f571b54
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

<<<<<<< HEAD
  constructor( private helper:HelperService, private router:Router ) { }
=======
  parametroIdCuenta: string | undefined;

  constructor(private activatedRoute:ActivatedRoute, 
              private router:Router, 
              private helper:HelperService) {}
>>>>>>> 41e42de9fc67ffe1516a7945a65fe2a23f571b54

  ngOnInit() {
    setTimeout(() => { this.loaded = true; }, 2000);
    this.parametroIdCuenta = this.activatedRoute.snapshot.params['idCuenta'];
  }

  //Variable para el skeleton
  public loaded = false;

<<<<<<< HEAD
  //Funcion asincrona para el logout con el alert
  async logout(){
    var confirm = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if( confirm == true ) {
      this.router.navigateByUrl("login");
    } else {
      this.router.navigateByUrl("menu-principal");
=======
  async logout(){
    
    var confirm = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if(confirm == true ) {
      this.router.navigateByUrl("login");
>>>>>>> 41e42de9fc67ffe1516a7945a65fe2a23f571b54
    }
  }

}
