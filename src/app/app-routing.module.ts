import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'patien',
    loadChildren: () => import('./patien/patien.module').then( m => m.PatienPageModule)
  },
  {
    path: 'list-patient',
    loadChildren: () => import('./list-patient/list-patient.module').then( m => m.ListPatientPageModule)

  },
  {
    path: 'update-p/:id',
    loadChildren: () => import('./update-p/update-p.module').then( m => m.UpdatePPageModule)
  },
  {
    path: 'calend',
    loadChildren: () => import('./calend/calend.module').then( m => m.CalendPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
