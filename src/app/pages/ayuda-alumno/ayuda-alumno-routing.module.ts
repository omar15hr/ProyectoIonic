import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaAlumnoPage } from './ayuda-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaAlumnoPageRoutingModule {}
