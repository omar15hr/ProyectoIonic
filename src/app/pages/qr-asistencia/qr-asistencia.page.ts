import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-qr-asistencia',
  templateUrl: './qr-asistencia.page.html',
  styleUrls: ['./qr-asistencia.page.scss'],
})
export class QrAsistenciaPage implements OnInit {

  constructor( private loadingCtrl: LoadingController ) { }
  


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








}


