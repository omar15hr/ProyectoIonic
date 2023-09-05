import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  parametroIdCuenta: string | undefined;

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    setTimeout(() => { this.loaded = true; }, 2000);
    this.parametroIdCuenta = this.activatedRoute.snapshot.params['idCuenta'];
  }
  public loaded = false;

}
