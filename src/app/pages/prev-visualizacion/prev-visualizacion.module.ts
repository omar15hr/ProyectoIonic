import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevVisualizacionPageRoutingModule } from './prev-visualizacion-routing.module';

import { PrevVisualizacionPage } from './prev-visualizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevVisualizacionPageRoutingModule
  ],
  declarations: [PrevVisualizacionPage]
})
export class PrevVisualizacionPageModule {}
