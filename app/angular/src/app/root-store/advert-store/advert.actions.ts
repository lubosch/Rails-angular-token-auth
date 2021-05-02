import { createAction, props } from '@ngrx/store'
import { AdvertModel } from '@core/models'

export enum ActionTypes {
  advertRequest = '[Advert] Request',
  advertFailure = '[Advert] Failure',
  advertSuccess = '[Advert] Success',
}

export const advertRequestAction = createAction(
  ActionTypes.advertRequest,
  props<{ id: number }>(),
)

export const advertFailureAction = createAction(
  ActionTypes.advertFailure,
  props<{ error: string }>(),
)

export const advertSuccessAction = createAction(
  ActionTypes.advertSuccess,
  props<{ advert: AdvertModel }>(),
)

