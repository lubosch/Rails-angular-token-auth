import { Action, createReducer, on } from '@ngrx/store'
import * as AdvertsActions from './adverts.actions'
import { initialState, State } from './adverts.state'

const reducer = createReducer(
  initialState,
  on(AdvertsActions.advertsRequestAction, state => (
    {
      ...state,
      error: null,
      isLoading: !state.isLoaded,
    }
  )),
  on(AdvertsActions.advertsSuccessAction, (state, payload) => (
    {
      ...state,
      adverts: payload.adverts.nodes,
      pageInfo: payload.adverts.pageInfo,
      totalCount: payload.adverts.totalCount,
      error: null,
      isLoading: false,
      isLoaded: true,
    }
  )),
  on(AdvertsActions.advertsFailureAction, (state, payload) => (
    {
      ...state,
      error: payload.error,
      isLoaded: true,
      isLoading: false,
    }
  )),
)

export const advertsReducer = (state: State | undefined, action: Action) => reducer(state, action)
