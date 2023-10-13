import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor( 
      private alertService: AlertController, 
      private loadingController:LoadingController,
      private toastController: ToastController,
      private modalController: ModalController
    ) { }


  async showAlert( msg:string, title:string, subTitle:string ){
    let alert = await this.alertService.create({ cssClass:"alertClass", message:msg, header:title, subHeader:subTitle, buttons:['Aceptar'] })
    await alert.present();
    return alert;
  }

  async showAlert2(msg:string,title:string){
    var alert = await this.alertService.create({cssClass:"alertClass",message:msg,header:title,buttons:['Aceptar']})
    await alert.present();
    return alert;
}

  async showConfirm(msg:string,btn_si:string,btn_no:string){
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
       }
    ]
    });
    await alert.present();
  })
  return promise;
}

async showLoader(msg:string){
  var loader = await this.loadingController.create(
    {
      cssClass:"loaderClass",
      message:msg,
      translucent:true
    }
    );
    await loader.present();
    return loader;
  }

  async showToast(msg: string, duration: number = 2000){
    let toast = await this.toastController.create(
      {
        cssClass:"toastClass",
        message:msg,
        duration:duration,
        position: "bottom",
        color:"dark"
      })
      await toast.present();
      return toast;
  }

  async showModal(component: any, props: any = {}, hideable = true) {
    let modal = await this.modalController.create(
      {
        component: component,
        cssClass:"modalClass",
        componentProps: props,
        backdropDismiss: hideable
      })
      await modal.present()
  }

}
