import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, Animation, IonCard, ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { HelperService } from 'src/app/services/helper.service';
import { ConfirmarQrPage } from 'src/app/modals/confirmar-qr/confirmar-qr.page';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {

  constructor(
      private modalCtrl: ModalController,
      private animationCtrl: AnimationController,
      private helper: HelperService,
    ) { }

  ngOnInit() {
    const loader = this.helper.showLoader("Cargando...");
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

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  //Animacion
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll('ion-icon'))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
    this.animation.play();
  }

  ionViewWillLeave(){
    this.animation.stop();
  }

  async scan() {
    let resultadoQr = ((await BarcodeScanner.scan()).code)
  
    if (resultadoQr) {
      let newResultadoQr = JSON.parse(resultadoQr)
      var infoQr = [];
    
      infoQr.push(newResultadoQr)
      const parametros = {dataQr: infoQr};
      
      this.helper.showModal(ConfirmarQrPage, parametros);
    } else {
      await this.helper.showAlert("No se ingreso la asistencia","Error","No pudo registrar");
    }
  }

}
