import { AuthenticationService } from '@core/services/authentication.service'

export const appInitializer = (authenticationService: AuthenticationService) =>
  () => new Promise(resolve => {
    // attempt to refresh token on app start up to auto authenticate
    authenticationService.refreshToken()
      .subscribe()
      .add(resolve)
  })

