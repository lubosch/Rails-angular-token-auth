import { Injectable } from '@angular/core'
import { UsersService } from '@core/services/users.service'
import { Profile } from '@graphql/graphql'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, switchMap, debounceTime, take } from 'rxjs/operators'
import { ActionTypes, profileReloadAction, profileRequestAction } from './profile.actions'

@Injectable()
export class ProfileStoreEffects {
  profileRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(profileRequestAction),
    debounceTime(300),
    switchMap(() =>
      this.dataService.profile().pipe(
        map((user: Profile) => ({ type: ActionTypes.profileSuccess, user })),
        catchError(error => of({ type: ActionTypes.profileFailure, error })),
      ),
    ),
    take(1),
  ))

  profileReloadEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(profileReloadAction),
    debounceTime(300),
    switchMap(() =>
      this.dataService.profile().pipe(
        map((user: Profile) => ({ type: ActionTypes.profileSuccess, user })),
        catchError(error => of({ type: ActionTypes.profileFailure, error })),
      ),
    ),
  ))

  constructor(private dataService: UsersService, private actions$: Actions) {
  }
}
