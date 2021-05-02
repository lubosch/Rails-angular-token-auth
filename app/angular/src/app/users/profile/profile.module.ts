/* eslint-disable max-len */
import { NgModule } from '@angular/core'
import { ProfileComponent } from '@app/users/profile/container/profile.component'
import { ProfileRouting } from '@app/users/profile/profile.routing'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [
    ProfileRouting,
    SharedModule,
  ],
  declarations: [
    ProfileComponent,
  ],
})
export class ProfileModule {
}
