import { Injectable } from '@angular/core'
import { AdvertsService } from '@core/services/adverts.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, switchMap, debounceTime, take } from 'rxjs/operators'
import { AdvertConnection } from 'src/generated/graphql'
import { ActionTypes } from './adverts.actions'

@Injectable()
export class AdvertsStoreEffects {
  advertsRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.advertsRequest),
    debounceTime(300),
    switchMap(() =>
      this.dataService.list().pipe(
        map((adverts: AdvertConnection) => ({ type: ActionTypes.advertsSuccess, adverts })),
        catchError(error => of({ type: ActionTypes.advertsFailure, error })),
      ),
    ),
  ))

  constructor(private dataService: AdvertsService, private actions$: Actions) {
  }
}
