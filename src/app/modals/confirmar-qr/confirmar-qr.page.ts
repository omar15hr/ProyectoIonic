import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-confirmar-qr',
  templateUrl: './confirmar-qr.page.html',
  styleUrls: ['./confirmar-qr.page.scss'],
})
export class ConfirmarQrPage implements OnInit {
  @Input() dataQr: any;

  objetoAsistencia: any;
  idAsistencia: string = '';
  idStorage: any;
  email: any;

  constructor(
    private modalController: ModalController,
    private storage:StorageService,
    private helper:HelperService,
    private auth: AngularFireAuth,
    ) { }

  ngOnInit() {
    this.getEmail();
  }

  async confirmar() {
    const actualUser = await this.auth.currentUser;
    this.objetoAsistencia = this.dataQr.shift()
    this.idAsistencia = this.objetoAsistencia.asignatura + this.objetoAsistencia.fecha + this.objetoAsistencia.seccion + actualUser?.email

    console.log(this.objetoAsistencia.asignatura);
    

    let asistencia = [{
      idAsistencia: this.idAsistencia,
      asignatura:this.objetoAsistencia.asignatura,
      docente:this.objetoAsistencia.docente,
      fecha:this.objetoAsistencia.fecha,
      hora:this.objetoAsistencia.hora,
      leccion:this.objetoAsistencia.leccion,
      sala:this.objetoAsistencia.sala,
      seccion:this.objetoAsistencia.seccion,
      email:this.email
    }];

    this.idStorage = (await this.storage.obtenerAsistencia()).filter(e => e.idAsistencia === this.idAsistencia);

    if (this.idStorage.length > 0){
      await this.helper.showAlert("Asistencia existente", "Error", "No Registrada");
      this.close()
    } else {
      this.storage.guardarAsistencia(asistencia);
      await this.helper.showAlert("Asistencia registrada exitosamente", "Exito", "Registrado");
      this.close()
    }
  }

  close() {
    this.modalController.dismiss()
  }

  async getEmail(){
    this.email = (await this.auth.currentUser)?.email!;
  }

}
