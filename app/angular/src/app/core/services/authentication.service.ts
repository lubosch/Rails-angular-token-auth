import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { catchError, concatMap, map, tap } from 'rxjs/operators'

import { environment } from '@environments/environment'
import { TokenModel } from '@core/models'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public token: Observable<TokenModel>
  public tokenSubject: BehaviorSubject<TokenModel>
  private refreshTokenTimeout

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.tokenSubject = new BehaviorSubject<TokenModel>(this.loadToken())
    this.token = this.tokenSubject.asObservable()
  }

  public get tokenValue(): TokenModel {
    return this.tokenSubject.value
  }

  login(attributes: { email: string; password: string }): Observable<TokenModel> {
    return this.http.post<any>(`${environment.apiUrl}/oauth/token`,
      {
        username: attributes.email, password: attributes.password, grantType: 'password',
        clientId: environment.authClientId, clientSecret: environment.authClientSecret,
      },
      { withCredentials: true })
      .pipe(map((token: TokenModel) => {
        this.tokenSubject.next(token)
        this.startRefreshTokenTimer()
        return this.tokenValue
      }))
  }

  register(attributes: {
    email: string; password: string; marketingAgreement: boolean; marketingAgreementDate: Date;
    privacyPolicyAgreement: boolean; privacyPolicyAgreementDate: Date
  }): Observable<TokenModel> {
    return this.http.post<any>(`${environment.apiUrl}/bare_api/users/sign_up`,
      { user: attributes },
      { withCredentials: true })
      .pipe(
        concatMap(() => this.login({ email: attributes.email, password: attributes.password })),
      )
  }

  logout(): Observable<any> {
    if (!this.tokenValue) {
      this.removeToken()
      this.stopRefreshTokenTimer()
      this.tokenSubject.next(null)
      return of(null)
    }
    return this.http.post<any>(`${environment.apiUrl}/oauth/revoke`, {
      token: this.tokenValue.accessToken,
      clientId: environment.authClientId, clientSecret: environment.authClientSecret,
    }, { withCredentials: true })
      .pipe(
        tap(() => {
          this.removeToken()
          this.stopRefreshTokenTimer()
          this.tokenSubject.next(null)
        }),
      )
  }

  refreshToken() {
    if (!this.tokenValue) return of(null)
    return this.http.post<any>(`${environment.apiUrl}/oauth/token`,
      {
        grantType: 'refresh_token', refreshToken: this.tokenValue.refreshToken,
        clientId: environment.authClientId, clientSecret: environment.authClientSecret,
      },
      { withCredentials: true })
      .pipe(
        map((token: TokenModel) => {
          this.tokenSubject.next(token)
          this.startRefreshTokenTimer()
          return token
        }),
        catchError((error) => {
          this.removeToken()
          this.tokenSubject.next(null)
          return of(error)
        }),
      )
  }

  // helper methods

  private startRefreshTokenTimer() {
    this.storeToken(this.tokenValue)
    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(this.tokenValue.createdAt + (this.tokenValue.expiresIn * 1000))
    const timeout = expires.getTime() - Date.now() - (60 * 1000)
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout)
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout)
  }

  private loadToken() {
    if (!localStorage.getItem('[TOKEN] accessToken')) return null
    return {
      accessToken: localStorage.getItem('[TOKEN] accessToken'),
      tokenType: 'Bearer',
      expiresIn: parseInt(localStorage.getItem('[TOKEN] expiresIn'), 10),
      refreshToken: localStorage.getItem('[TOKEN] refreshToken'),
      createdAt: parseInt(localStorage.getItem('[TOKEN] createdAt'), 10),
    }
  }

  private storeToken(token: TokenModel) {
    localStorage.setItem('[TOKEN] accessToken', token.accessToken)
    localStorage.setItem('[TOKEN] expiresIn', token.expiresIn.toString())
    localStorage.setItem('[TOKEN] refreshToken', token.refreshToken)
    localStorage.setItem('[TOKEN] createdAt', token.createdAt.toString())
  }

  private removeToken() {
    localStorage.removeItem('[TOKEN] accessToken')
    localStorage.removeItem('[TOKEN] expiresIn')
    localStorage.removeItem('[TOKEN] refreshToken')
    localStorage.removeItem('[TOKEN] createdAt')
  }
}
