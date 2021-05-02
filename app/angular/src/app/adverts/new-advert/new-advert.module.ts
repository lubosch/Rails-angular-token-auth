/* eslint-disable max-len */
import { NgModule } from '@angular/core'
import { NewAdvertFormComponent } from '@app/adverts/new-advert/components/new-advert-form.component'
import { NewAdvertComponent } from '@app/adverts/new-advert/container/new-advert.component'
import { NewAdvertRouting } from '@app/adverts/new-advert/new-advert.routing'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [
    NewAdvertRouting,
    SharedModule,
  ],
  declarations: [
    NewAdvertComponent,
    NewAdvertFormComponent,
  ],
})
export class NewAdvertModule {
}
