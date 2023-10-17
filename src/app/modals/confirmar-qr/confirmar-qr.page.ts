import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-confirmar-qr',
  templateUrl: './confirmar-qr.page.html',
  styleUrls: ['./confirmar-qr.page.scss'],
})
export class ConfirmarQrPage implements OnInit {
  
  @Input() dataQr: any[]=[];

  constructor(
    private modalController: ModalController,
    private storage:StorageService
    ) { }

  ngOnInit() {
  }

  confirmar() {
    this.storage.guardarUsuario(this.dataQr);
    this.close()
  }

  close() {
    this.modalController.dismiss()
  }

}
