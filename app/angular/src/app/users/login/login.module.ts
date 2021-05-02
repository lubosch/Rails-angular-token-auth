/* eslint-disable max-len */
import { NgModule } from '@angular/core'
import { LoginComponent } from '@app/users/login/container/login.component'
import { LoginRouting } from '@app/users/login/login.routing'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [
    LoginRouting,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule {
}
