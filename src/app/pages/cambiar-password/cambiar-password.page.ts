import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cambiarPassword(){
    this.router.navigateByUrl('login');
  }
}
