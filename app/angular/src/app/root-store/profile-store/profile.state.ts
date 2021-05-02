import { UserModel } from '@core/models'

export interface State {
  user: UserModel
  isLoading: boolean
  isLoaded: boolean
  login: boolean
  logout: boolean
  error: string
}

export const initialState: State = {
  user: null,
  isLoading: false,
  isLoaded: false,
  login: false,
  logout: false,
  error: null,
}
