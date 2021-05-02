import { createAction, props } from '@ngrx/store'
import { AdvertModel } from '@core/models'

export enum ActionTypes {
  advertsRequest = '[Adverts] Request',
  advertsFailure = '[Adverts] Failure',
  advertsSuccess = '[Adverts] Success',
}

export const advertsRequestAction = createAction(ActionTypes.advertsRequest)

export const advertsFailureAction = createAction(
  ActionTypes.advertsFailure,
  props<{ error: string }>(),
)

export const advertsSuccessAction = createAction(
  ActionTypes.advertsSuccess,
  props<{ adverts: AdvertModel[] }>(),
)

