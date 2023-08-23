import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrAsistenciaPageRoutingModule } from './qr-asistencia-routing.module';

import { QrAsistenciaPage } from './qr-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAsistenciaPageRoutingModule
  ],
  declarations: [QrAsistenciaPage]
})
export class QrAsistenciaPageModule {}
