import { Action, createReducer, on } from '@ngrx/store'
import * as AdvertActions from './advert.actions'
import { initialState, State } from './advert.state'

const reducer = createReducer(
  initialState,
  on(AdvertActions.advertRequestAction, state => (
    {
      ...state,
      error: null,
      isLoading: !state.isLoaded,
    }
  )),
  on(AdvertActions.advertSuccessAction, (state, payload) => (
    {
      ...state,
      advert: payload.advert,
      error: null,
      isLoading: false,
      isLoaded: true,
    }
  )),
  on(AdvertActions.advertFailureAction, (state, payload) => (
    {
      ...state,
      error: payload.error,
      isLoaded: true,
      isLoading: false,
    }
  )),
)

export const advertReducer = (state: State | undefined, action: Action) => reducer(state, action)
