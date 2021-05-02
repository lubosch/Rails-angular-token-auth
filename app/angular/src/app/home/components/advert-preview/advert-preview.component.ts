import { Component, Input } from '@angular/core'
import { Advert } from 'src/generated/graphql'

@Component({
  selector: 'app-advert-preview',
  styleUrls: ['./advert-preview.component.scss'],
  templateUrl: './advert-preview.component.html',
})
export class AdvertPreviewComponent {
  @Input() advert: Advert

  constructor() {
  }
}
