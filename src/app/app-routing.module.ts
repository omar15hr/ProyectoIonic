import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'cambiar-password',
    loadChildren: () => import('./pages/cambiar-password/cambiar-password.module').then( m => m.CambiarPasswordPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'prev-visualizacion',
    loadChildren: () => import('./pages/prev-visualizacion/prev-visualizacion.module').then( m => m.PrevVisualizacionPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'confirmar-qr',
    loadChildren: () => import('./modals/confirmar-qr/confirmar-qr.module').then( m => m.ConfirmarQrPageModule)
  },
  {
    canActivate:[ AngularFireAuthGuard ],
    data:{ authGuardPipe: redireccionLogin },
    path: 'dispositivo',
    loadChildren: () => import('./pages/dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },










];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
