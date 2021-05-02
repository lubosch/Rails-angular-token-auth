import { Component, Input } from '@angular/core'
import { AdvertModel } from '@core/models'

@Component({
  selector: 'app-advert-preview',
  styleUrls: ['./advert-preview.component.scss'],
  templateUrl: './advert-preview.component.html',
})
export class AdvertPreviewComponent {
  @Input() advert: AdvertModel

  constructor() {
  }
}
