import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrAsistenciaPage } from './qr-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: QrAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrAsistenciaPageRoutingModule {}
