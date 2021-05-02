import { Injectable } from '@angular/core'
import { AdvertModel } from '@core/models'
import { AdvertsService } from '@core/services/adverts.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, switchMap, debounceTime, take } from 'rxjs/operators'
import { ActionTypes, advertRequestAction } from './advert.actions'

@Injectable()
export class AdvertStoreEffects {
  advertRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(advertRequestAction),
    debounceTime(300),
    switchMap(action =>
      this.dataService.get(action.id).pipe(
        map((advert: AdvertModel) => ({ type: ActionTypes.advertSuccess, advert })),
        catchError(error => of({ type: ActionTypes.advertFailure, error })),
      ),
    ),
  ))

  constructor(private dataService: AdvertsService, private actions$: Actions) {
  }
}
