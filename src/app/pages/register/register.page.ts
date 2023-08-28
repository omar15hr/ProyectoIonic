import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";
  email:string = "";
  sala:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Registrarse(){
    this.router.navigateByUrl('login');
  }

}
