import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { AuthenticationService } from '@core/services/authentication.service'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const token = this.authenticationService.tokenValue
    const isLoggedIn = token && token.accessToken
    const isApiUrl = request.url.startsWith(environment.apiUrl)
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: request.headers.get('Authorization') || `Bearer ${token.accessToken}` },
      })
    }

    return next.handle(request)
  }
}
