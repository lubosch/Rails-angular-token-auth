import { Action, createReducer, on } from '@ngrx/store'
import * as ProfileActions from './profile.actions'
import { initialState, State } from './profile.state'

const reducer = createReducer(
  initialState,
  on(ProfileActions.profileRequestAction, state => (
    {
      ...state,
      error: null,
      isLoading: !state.isLoaded,
    }
  )),
  on(ProfileActions.profileReloadAction, state => (
    {
      ...state,
      error: null,
      isLoading: true,
      isLoaded: false,
    }
  )),
  on(ProfileActions.profileSuccessAction, (state, payload) => (
    {
      ...state,
      user: payload.user,
      error: null,
      isLoading: false,
      isLoaded: true,
    }
  )),
  on(ProfileActions.profileLoginSuccessAction, state => (
    {
      ...state,
      login: true,
      logout: false,
    }
  )),
  on(ProfileActions.profileLogoutSuccessAction, state => (

    {
      ...state,
      user: null,
      login: false,
      logout: true,
    }
  )),
  on(ProfileActions.profileFailureAction, (state, payload) => (
    {
      ...state,
      error: payload.error,
      isLoaded: true,
      isLoading: false,
    }
  )),
  on(ProfileActions.profileUpdateSuccessAction, (state, payload) => (
    {
      ...state,
      user: {
        ...state.user,
        ...payload.user,
      },
      error: null,
      isLoading: false,
      isLoaded: true,
    }
  )),
)

export const profileReducer = (state: State | undefined, action: Action) => reducer(state, action)
