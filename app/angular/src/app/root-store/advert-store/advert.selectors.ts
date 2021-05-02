import { AdvertModel } from '@core/models'
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store'

import { State } from './advert.state'

const getError = (state: State): any => state.error

const getIsLoading = (state: State): boolean => state.isLoading && !state.isLoaded

const getIsLoaded = (state: State): boolean => state.isLoaded

const getAdvert = (state: State): AdvertModel => state.advert


export const selectAdvertState: MemoizedSelector<unknown, State> =
  createFeatureSelector<State>('advert')

export const selectAdvertsError: MemoizedSelector<unknown, any> = createSelector(
  selectAdvertState,
  getError,
)

export const selectAdvertIsLoading: MemoizedSelector<unknown, boolean> =
  createSelector(selectAdvertState, getIsLoading)

export const selectAdvertsIsLoaded: MemoizedSelector<unknown, boolean> =
  createSelector(selectAdvertState, getIsLoaded)

export const selectAdvert: MemoizedSelector<unknown, AdvertModel> =
  createSelector(selectAdvertState, getAdvert)
