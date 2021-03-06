import { Profile } from '@graphql/graphql'
import { createAction, props } from '@ngrx/store'

export enum ActionTypes {
  profileRequest = '[Profile] Request',
  profileReload = '[Profile] Reload',
  profileFailure = '[Profile] Failure',
  profileSuccess = '[Profile] Success',

  profileUpdateSuccess = '[Profile] Update success',

  profileLoginSuccess = '[Profile] Login success',
  profileLogoutSuccess = '[Profile] Logout success',
}


export const profileRequestAction = createAction(ActionTypes.profileRequest)

export const profileReloadAction = createAction(ActionTypes.profileReload)

export const profileFailureAction = createAction(
  ActionTypes.profileFailure,
  props<{ error: string }>(),
)

export const profileSuccessAction = createAction(
  ActionTypes.profileSuccess,
  props<{ user: Profile }>(),
)

export const profileLoginSuccessAction = createAction(ActionTypes.profileLoginSuccess)

export const profileUpdateSuccessAction = createAction(
  ActionTypes.profileUpdateSuccess,
  props<{ user: Profile }>(),
)

export const profileLogoutSuccessAction = createAction(ActionTypes.profileLogoutSuccess)
