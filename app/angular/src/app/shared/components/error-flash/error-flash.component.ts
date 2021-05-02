import { Component, Input } from '@angular/core'
import { isEmpty } from 'lodash-es'

@Component({
  selector: 'app-error-flash',
  templateUrl: './error-flash.component.html',
  styleUrls: ['./error-flash.component.scss'],
})
export class ErrorFlashComponent {
  @Input() errors

  isEmpty = isEmpty

  isString(): boolean {
    return typeof this.errors === 'string'
  }

  isArray(): boolean {
    return Array.isArray(this.errors)
  }
}
