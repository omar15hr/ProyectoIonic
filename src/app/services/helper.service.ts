import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor( private alertService: AlertController ) { }


  async showAlert( msg:string, title:string, subTitle:string ){
    let alert = await this.alertService.create({ cssClass:"alertClass", message:msg, header:title, subHeader:subTitle, buttons:['Aceptar'] })
    await alert.present();
    return alert;
  }

<<<<<<< HEAD
  async showConfirm( msg:string, btn_si:string, btn_no:string ){
=======
  async showConfirm(msg:string,btn_si:string,btn_no:string){
>>>>>>> 41e42de9fc67ffe1516a7945a65fe2a23f571b54
    let promise = new Promise<boolean>(async (resolve) =>{
      var alert = await this.alertService.create({cssClass:"", message:msg,buttons:
      [
        {
          text:btn_si,
          handler:() =>{
            resolve(true);
          }
        },
        {
          text:btn_no,
          handler:() =>{
            resolve(false);
          }
<<<<<<< HEAD
      }
=======
       }
>>>>>>> 41e42de9fc67ffe1516a7945a65fe2a23f571b54
    ]
    });
    await alert.present();
  })
  return promise;
}

}
