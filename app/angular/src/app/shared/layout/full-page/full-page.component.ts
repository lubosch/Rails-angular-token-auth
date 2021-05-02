import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-layout-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss'],

})
export class FullPageComponent {
  @Input() responsive = false

  constructor() {
  }
}
