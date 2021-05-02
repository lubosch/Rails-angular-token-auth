import { AdvertModel } from '@core/models'

export interface State {
  adverts: AdvertModel[]
  isLoading: boolean
  isLoaded: boolean
  error: string
}

export const initialState: State = {
  adverts: [],
  isLoading: false,
  isLoaded: false,
  error: null,
}
