import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-docente',
    loadChildren: () => import('./pages/menu-docente/menu-docente.module').then( m => m.MenuDocentePageModule)
  },
  {
    path: 'menu-alumno',
    loadChildren: () => import('./pages/menu-alumno/menu-alumno.module').then( m => m.MenuAlumnoPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },  {
    path: 'ayuda-docente',
    loadChildren: () => import('./pages/ayuda-docente/ayuda-docente.module').then( m => m.AyudaDocentePageModule)
  },
  {
    path: 'ayuda-alumno',
    loadChildren: () => import('./pages/ayuda-alumno/ayuda-alumno.module').then( m => m.AyudaAlumnoPageModule)
  },
  {
    path: 'qr-asistencia',
    loadChildren: () => import('./pages/qr-asistencia/qr-asistencia.module').then( m => m.QrAsistenciaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
