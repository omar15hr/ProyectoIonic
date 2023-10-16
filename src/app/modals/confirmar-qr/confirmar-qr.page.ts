import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-qr',
  templateUrl: './confirmar-qr.page.html',
  styleUrls: ['./confirmar-qr.page.scss'],
})
export class ConfirmarQrPage implements OnInit {
  
  @Input() dataQr: any[]=[];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.dataQr);
  }

  close() {
    this.modalController.dismiss()
  }

}
