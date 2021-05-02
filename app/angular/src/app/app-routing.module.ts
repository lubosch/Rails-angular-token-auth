import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '@app/helpers/auth.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'sign_up',
    loadChildren: () => import('./users/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./users/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
