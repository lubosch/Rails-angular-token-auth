import { AdvertModel } from '@core/models'
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store'

import { State } from './adverts.state'

const getError = (state: State): any => state.error

const getIsLoading = (state: State): boolean => state.isLoading && !state.isLoaded

const getIsLoaded = (state: State): boolean => state.isLoaded

const getAdverts = (state: State): AdvertModel[] => state.adverts


export const selectAdvertsState: MemoizedSelector<unknown, State> =
  createFeatureSelector<State>('adverts')

export const selectAdvertsError: MemoizedSelector<unknown, any> = createSelector(
  selectAdvertsState,
  getError,
)

export const selectAdvertsIsLoading: MemoizedSelector<unknown, boolean> =
  createSelector(selectAdvertsState, getIsLoading)

export const selectAdvertsIsLoaded: MemoizedSelector<unknown, boolean> =
  createSelector(selectAdvertsState, getIsLoaded)

export const selectAdverts: MemoizedSelector<unknown, AdvertModel[]> =
  createSelector(selectAdvertsState, getAdverts)
