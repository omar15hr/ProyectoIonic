import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevVisualizacionPage } from './prev-visualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: PrevVisualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevVisualizacionPageRoutingModule {}
