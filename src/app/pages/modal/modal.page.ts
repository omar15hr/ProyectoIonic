import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  usuarios:any;
  asistencias:any;

  @Input() nombre: string | any;
  @Input() sede: string | any;

  constructor( 
    private modalCtrl: ModalController, 
    private storage:StorageService,
    private helper:HelperService,
    private auth:AngularFireAuth ) { }

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
    const actualUser = await this.auth.currentUser;
    this.asistencias = (await this.storage.obtenerAsistencia()).filter(e => e.email === actualUser?.email!);

    if(this.asistencias.length == 0) {
      this.helper.showAlert( "No hay asistencias registradas", "Lo siento", "Asistencias" )
    }
  }

}
