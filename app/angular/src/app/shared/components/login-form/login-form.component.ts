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
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  @Output() setUser: EventEmitter<UserData> = new EventEmitter()
  loginForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  error = ''
  isInvalid = isInvalid

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<RootStoreState.State>,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.tokenValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/'
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls
  }

  onSubmit() {
    this.submitted = true

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return
    }

    this.loading = true
    this.authenticationService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        () => {
          this.store.dispatch(ProfileStoreActions.profileReloadAction())
          this.store.dispatch(ProfileStoreActions.profileLoginSuccessAction())
          this.router.navigate([this.returnUrl])
        },
        (error) => {
          this.error = error
          this.loading = false
        },
      )
  }
}
