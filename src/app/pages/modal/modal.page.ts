import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  asistencias:any;

  @Input() nombre: string | any;
  @Input() sede: string | any;

  constructor( private modalCtrl: ModalController, private storage:StorageService ) { }

  ngOnInit() {
    this.cargarUsuario()
  }

  salirPrev() {
    this.modalCtrl.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
  }

  async cargarUsuario(){
    this.asistencias = await this.storage.obtenerAsistencia();
  }

}
