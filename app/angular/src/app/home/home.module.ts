import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdvertPreviewComponent } from '@app/home/components/advert-preview/advert-preview.component'
import { AdvertsListComponent } from '@app/home/components/adverts-list/adverts-list.component'
import { HomeComponent } from '@app/home/container/home.component'
import { HomeRoutingModule } from '@app/home/home-routing.module'
import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'


@NgModule({
  declarations: [
    HomeComponent,
    AdvertsListComponent,
    AdvertPreviewComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule,
  ],
})
export class HomeModule {
}
