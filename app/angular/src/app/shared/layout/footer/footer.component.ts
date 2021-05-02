import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],

})
export class FooterComponent {
  @Input() responsive = false
}
