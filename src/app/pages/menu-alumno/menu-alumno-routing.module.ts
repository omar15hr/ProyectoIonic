import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAlumnoPage } from './menu-alumno.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu-alumno/menu-principal',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MenuAlumnoPage,
    children:[
      {
        path: 'menu-principal',
        loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('../cuenta/cuenta.module').then( m => m.CuentaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAlumnoPageRoutingModule {}
