import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { UsersService } from '@core/services/users.service'


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    UsersService,
  ],
})
export class CoreModule {
}
