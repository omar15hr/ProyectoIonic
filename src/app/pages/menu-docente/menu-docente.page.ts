import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-menu-docente',
  templateUrl: './menu-docente.page.html',
  styleUrls: ['./menu-docente.page.scss'],
})
export class MenuDocentePage implements OnInit {

  @ViewChild(IonItem, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor( private animationCtrl: AnimationController ) { }

  ngOnInit() {
  }

  // ANIMACION PARA LA PRESENTACION DE LOS MENUS
  ionViewDidEnter(){
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-item"))
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      this.animation.play();
  }
}
