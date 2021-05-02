import { Advert, PageInfo } from 'src/generated/graphql'

export interface State {
  adverts: Advert[]
  isLoading: boolean
  isLoaded: boolean
  pageInfo: PageInfo
  totalCount: number
  error: string
}

export const initialState: State = {
  adverts: [],
  pageInfo: null,
  totalCount: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}
