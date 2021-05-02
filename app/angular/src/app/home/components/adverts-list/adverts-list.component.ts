import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AdvertsStoreActions, AdvertsStoreSelectors } from '@store/adverts-store'
import { RootStoreState } from '@store/index'
import { Observable } from 'rxjs'
import { Advert } from 'src/generated/graphql'

@Component({
  selector: 'app-adverts-list',
  styleUrls: ['./adverts-list.component.scss'],
  templateUrl: './adverts-list.component.html',
})
export class AdvertsListComponent implements OnInit {
  adverts$: Observable<Advert[]> = this.store.select(AdvertsStoreSelectors.selectAdverts)

  constructor(private store: Store<RootStoreState.State>) {
  }

  trackByFn = (index, advert: Advert) => advert.id

  ngOnInit(): void {
    this.store.dispatch(AdvertsStoreActions.advertsRequestAction())
  }
}
