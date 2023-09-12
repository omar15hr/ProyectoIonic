import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, Animation, IonCard, LoadingController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor( 
      private loadingCtrl: LoadingController, 
      private modalCtrl: ModalController,
      private animationCtrl: AnimationController
    ) { }

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
    // this.animationAsistencia.stop();
  }
  





}
