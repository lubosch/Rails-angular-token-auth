import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from '@app/home/container/home.component'
import { HomeRoutingModule } from '@app/home/home-routing.module'
import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
  ],
})
export class HomeModule {
}
