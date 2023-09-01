import { Component, OnInit } from '@angular/core';
import { PrevVisualizacionPage } from '../prev-visualizacion/prev-visualizacion.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async mostrarPrev(){
    const modal = await this.modalCtrl.create({
      component: PrevVisualizacionPage,
      componentProps: {
        nombre: 'Omar',
        sede: 'San Joaquin'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
  }

}
