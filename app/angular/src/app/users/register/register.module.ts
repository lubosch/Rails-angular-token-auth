/* eslint-disable max-len */
import { NgModule } from '@angular/core'
import { RegisterComponent } from '@app/users/register/container/register.component'
import { RegisterRouting } from '@app/users/register/register.routing'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [
    RegisterRouting,
    SharedModule,
  ],
  declarations: [
    RegisterComponent,
  ],
})
export class RegisterModule {
}
