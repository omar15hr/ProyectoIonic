import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  parametroIdCuenta: string | undefined;
  info:any;
  deviceID:any;
  languageLocaleCode:any;
  languageTag:any;

  constructor(
    private router:Router, 
    private helper:HelperService,
    private storage:StorageService,
    private auth:AngularFireAuth,
    private menuCtrl:MenuController
  ) {}

  ngOnInit() {
    setTimeout(() => { this.loaded = true; }, 2000);
    this.parametroIdCuenta = this.storage.correoUsuario;
    this.deviceInfo();

    // Toast
    this.helper.showToast("Sesión iniciada correctamente. Bienvenido")
  }

  // Perfil de usuario
  perfilUsuario(){
    this.router.navigateByUrl("perfil-usuario");
  }

  ionViewDidLeave(){
    this.menuCtrl.close();
  }

  menu(){
    this.menuCtrl.toggle();
  }

  closeMenu(){
    this.menuCtrl.close();
  }

  //Variable para el skeleton
  public loaded = false;

  async logout(){
    var confirm = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if(confirm == true ) {
      this.router.navigateByUrl("login");
      await this.auth.signOut();
    }
  }

  async deviceInfo(){
    var info = await Device.getInfo();
    console.log(info);
  }

}
