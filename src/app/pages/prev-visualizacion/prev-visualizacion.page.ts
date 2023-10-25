import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prev-visualizacion',
  templateUrl: './prev-visualizacion.page.html',
  styleUrls: ['./prev-visualizacion.page.scss'],
})
export class PrevVisualizacionPage implements OnInit {
  @Input() nombre: string | any;
  @Input() sede: string | any;

  constructor( 
      private modalCtrl: ModalController,
    ) { }

  ngOnInit() {
  }

  salirPrev() {
    this.modalCtrl.dismiss({
      nombre: 'Felipe',
      sede: 'San Joaquin'
    });
  }

}
