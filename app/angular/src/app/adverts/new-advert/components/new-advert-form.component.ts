import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { isInvalid } from '@app/helpers/form-helpers'
import { AdvertModel } from '@core/models'
import { AdvertsService } from '@core/services/adverts.service'
import { faCloudUploadAlt, faLock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-adverts-new-form',
  styleUrls: ['./new-advert-form.component.scss'],
  templateUrl: './new-advert-form.component.html',
})
export class NewAdvertFormComponent {
  error: string
  isInvalid = isInvalid
  faLock = faLock
  faCloudUpload = faCloudUploadAlt
  creating = false
  filePath: string

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(6)]],
    description: [''],
    price: [10.0, Validators.required],
    image: ['', [Validators.required]],
    imageSource: ['', [Validators.required]],
  })

  get f() {
    return this.form.controls
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private advertsService: AdvertsService) {
  }

  onFileChange(event) {
    const element = event.currentTarget as HTMLInputElement
    const fileList: FileList = element.files

    if (fileList.length > 0) {
      const file = fileList[0]
      this.form.patchValue({
        imageSource: file,
      })

      const reader = new FileReader()
      reader.onload = () => {
        this.filePath = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  onSubmit() {
    if (this.creating) return
    if (!this.form.valid) {
      this.form.markAllAsTouched()
      return
    }

    const data = new FormData()
    Object.keys(this.form.value).forEach((key) => {
      data.append(key, this.form.value[key])
    })

    this.advertsService.create(data).subscribe(
      (advert: AdvertModel) => {
        this.router.navigate(['/', 'advert', advert.id])
      },
      (error) => this.error = error,
    )
  }
}
