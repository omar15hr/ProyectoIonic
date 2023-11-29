import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  info:any;
  batteryInfo:any;
  deviceID:any;
  languageLocaleCode:any;
  languageTag:any;
  batteryLevel:any;

  constructor(private auth:AngularFireAuth,) { }

  ngOnInit() {
    this.deviceInfo();
  }

  async deviceInfo(){
    
    this.info = await Device.getInfo();
    this.deviceID = await Device.getId();
    this.batteryInfo = await Device.getBatteryInfo();
    this.batteryLevel = this.batteryInfo.batteryLevel * 100;
    this.languageLocaleCode = await Device.getLanguageCode();
    this.languageTag = await Device.getLanguageTag();

  }
}
