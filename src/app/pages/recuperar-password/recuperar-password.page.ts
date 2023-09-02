import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  correo:string = "";

  constructor(private router:Router, private helper:HelperService) { }

  ngOnInit() {
  }

  recuperarPassword(){
    if (this.correo == "") {
      this.helper.showAlert( "Debe ingresar un correo", "Error", "Campo obligatorio" )
      return;
    }

    else{
      this.router.navigateByUrl('login');
    }
    
  }
}
