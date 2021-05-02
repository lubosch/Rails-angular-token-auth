import { AbstractControl, FormControl } from '@angular/forms'

export const isInvalid = (field: FormControl | AbstractControl): boolean => field.invalid && field.touched
