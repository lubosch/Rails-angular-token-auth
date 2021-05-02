import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ErrorFlashComponent } from '@shared/components/error-flash/error-flash.component'
import { LoginFormComponent } from '@shared/components/login-form/login-form.component'
import { RegisterFormComponent } from '@shared/components/register-form/register-form.component'
import { FooterComponent } from '@shared/layout/footer/footer.component'
import { FullPageComponent } from '@shared/layout/full-page/full-page.component'
import { HeaderComponent } from '@shared/layout/header/header.component'
import { NgxPopperjsModule } from 'ngx-popperjs'


@NgModule({
  declarations: [
    FooterComponent,
    FullPageComponent,
    HeaderComponent,
    ErrorFlashComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPopperjsModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    FullPageComponent,
    ErrorFlashComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
})
export class SharedModule {
}
