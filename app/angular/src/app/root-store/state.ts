import { AdvertStoreState } from '@store/advert-store'
import { AdvertsStoreState } from '@store/adverts-store'
import { ProfileStoreState } from '@store/profile-store'

export interface State {
  profile: ProfileStoreState.State
  adverts: AdvertsStoreState.State
  advert: AdvertStoreState.State
}
