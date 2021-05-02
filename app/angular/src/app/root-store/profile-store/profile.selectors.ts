import { Profile } from '@graphql/graphql'
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store'

import { State } from './profile.state'

const getError = (state: State): any => state.error

const getIsLoading = (state: State): boolean => state.isLoading && !state.isLoaded

const getIsLoaded = (state: State): boolean => state.isLoaded

const getUser = (state: State): Profile => state.user

const getUserChanged = (state: State): string => {
  if (state.login) return `1`
  if (state.logout) return `2`
  return `0`
}

export const selectProfileState: MemoizedSelector<unknown, State> =
  createFeatureSelector<State>('profile')

export const selectProfileError: MemoizedSelector<unknown, any> = createSelector(
  selectProfileState,
  getError,
)

export const selectProfileIsLoading: MemoizedSelector<unknown, boolean> =
  createSelector(selectProfileState, getIsLoading)

export const selectProfileIsLoaded: MemoizedSelector<unknown, boolean> =
  createSelector(selectProfileState, getIsLoaded)

export const selectProfile: MemoizedSelector<unknown, Profile> =
  createSelector(selectProfileState, getUser)

export const selectProfileChange: MemoizedSelector<unknown, string> =
  createSelector(selectProfileState, getUserChanged)
