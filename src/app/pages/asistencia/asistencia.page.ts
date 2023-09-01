import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor( private loadingCtrl: LoadingController, private modalCtrl: ModalController ) { }

  ngOnInit() {
    this.showLoading();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1500,
    });

    loading.present();
  }

  async mostrarPrev(){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        nombre: 'Omar',
        sede: 'San Joaquin'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
  }

}
