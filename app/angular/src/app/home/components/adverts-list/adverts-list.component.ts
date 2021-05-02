import { Component, OnInit } from '@angular/core'
import { AdvertModel } from '@core/models'
import { Store } from '@ngrx/store'
import { AdvertsStoreActions, AdvertsStoreSelectors } from '@store/adverts-store'
import { RootStoreState } from '@store/index'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-adverts-list',
  styleUrls: ['./adverts-list.component.scss'],
  templateUrl: './adverts-list.component.html',
})
export class AdvertsListComponent implements OnInit {
  adverts$: Observable<AdvertModel[]> = this.store.select(AdvertsStoreSelectors.selectAdverts)

  constructor(private store: Store<RootStoreState.State>) {
  }

  trackByFn = (index, advert: AdvertModel) => advert.id

  ngOnInit(): void {
    this.store.dispatch(AdvertsStoreActions.advertsRequestAction())
  }
}
