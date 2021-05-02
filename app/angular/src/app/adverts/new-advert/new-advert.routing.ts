import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NewAdvertComponent } from '@app/adverts/new-advert/container/new-advert.component'

const routes: Routes = [
  {
    path: '',
    component: NewAdvertComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAdvertRouting {}
