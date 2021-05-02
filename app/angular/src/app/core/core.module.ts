import { NgModule } from '@angular/core'
import { AdvertsService } from '@core/services/adverts.service'
import { UsersService } from '@core/services/users.service'


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    UsersService,
    AdvertsService,
  ],
})
export class CoreModule {
}
