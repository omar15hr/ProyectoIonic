import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaDocentePage } from './ayuda-docente.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaDocentePageRoutingModule {}
