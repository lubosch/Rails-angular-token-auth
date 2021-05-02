import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { appInitializer } from '@app/helpers/app.initializer'
import { ErrorInterceptor } from '@app/helpers/error.interceptor'
import { JwtInterceptor } from '@app/helpers/jwt.interceptor'
import { CoreModule } from '@core/core.module'
import { AuthenticationService } from '@core/services/authentication.service'
import { RootStoreModule } from '@store/root-store.module'
import { NgxPopperjsModule, NgxPopperjsPlacements } from 'ngx-popperjs'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    CoreModule,
    RootStoreModule,
    AppRoutingModule,
    NgxPopperjsModule.forRoot({ placement: NgxPopperjsPlacements.BOTTOM }),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
