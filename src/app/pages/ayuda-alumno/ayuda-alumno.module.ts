import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaAlumnoPageRoutingModule } from './ayuda-alumno-routing.module';

import { AyudaAlumnoPage } from './ayuda-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaAlumnoPageRoutingModule
  ],
  declarations: [AyudaAlumnoPage]
})
export class AyudaAlumnoPageModule {}
