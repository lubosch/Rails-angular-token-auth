import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UserData } from '@core/models'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '@core/services/authentication.service'
import { Store } from '@ngrx/store'
import { RootStoreState } from '@store/index'
import { ProfileStoreActions } from '@store/profile-store'
import { first } from 'rxjs/operators'
import { isInvalid } from '@app/helpers/form-helpers'

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit {
  @Output() setUser: EventEmitter<UserData> = new EventEmitter()
  signupForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''
  isInvalid = isInvalid

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<RootStoreState.State>,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.tokenValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      marketingAgreement: [false],
      marketingAgreementDate: [null],
      privacyPolicyAgreement: [false, Validators.requiredTrue],
      privacyPolicyAgreementDate: [new Date()],
    })

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/'
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls
  }

  onSubmit() {
    this.submitted = true

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched()
      return
    }

    this.loading = true
    this.authenticationService.register(this.signupForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.store.dispatch(ProfileStoreActions.profileReloadAction())
          this.store.dispatch(ProfileStoreActions.profileLoginSuccessAction())

          this.router.navigate([this.returnUrl])
        },
        error: error => {
          this.error = error.message
          this.loading = false
        },
      })
  }
}
