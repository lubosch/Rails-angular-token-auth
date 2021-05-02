import { Profile } from '@graphql/graphql'

export interface State {
  user: Profile
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
