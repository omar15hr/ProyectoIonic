import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaDocentePageRoutingModule } from './ayuda-docente-routing.module';

import { AyudaDocentePage } from './ayuda-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaDocentePageRoutingModule
  ],
  declarations: [AyudaDocentePage]
})
export class AyudaDocentePageModule {}
