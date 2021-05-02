import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AdvertsService } from '@core/services/adverts.service'
import { UsersService } from '@core/services/users.service'


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    UsersService,
    AdvertsService,
  ],
})
export class CoreModule {
}
