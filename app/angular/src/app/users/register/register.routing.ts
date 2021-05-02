import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from '@app/users/register/container/register.component'

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRouting {}
