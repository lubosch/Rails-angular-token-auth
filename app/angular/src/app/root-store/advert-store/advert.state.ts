import { AdvertModel } from '@core/models'

export interface State {
  advert: AdvertModel
  isLoading: boolean
  isLoaded: boolean
  error: string
}

export const initialState: State = {
  advert: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}
