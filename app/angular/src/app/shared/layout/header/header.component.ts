import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '@core/services/authentication.service'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Profile } from '@graphql/graphql'
import { Store } from '@ngrx/store'
import { RootStoreState } from '@store/index'
import { ProfileStoreActions, ProfileStoreSelectors } from '@store/profile-store'
import { Apollo } from 'apollo-angular'
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  showMenu = false
  faBars = faBars
  faCaret = faCaretDown
  placementBottom = NgxPopperjsPlacements.BOTTOM
  triggerClick = NgxPopperjsTriggers.click

  currentUser$: Observable<Profile> = this.store.select(ProfileStoreSelectors.selectProfile)

  constructor(private store: Store<RootStoreState.State>,
              private router: Router,
              private apollo: Apollo,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    if (this.authenticationService.tokenValue) {
      this.store.dispatch(ProfileStoreActions.profileRequestAction())
    }
  }

  toggleNavbar() {
    this.showMenu = !this.showMenu
  }

  logout() {
    this.authenticationService.logout().subscribe(
      () => {
        this.apollo.client.clearStore().then(
          () => {
            this.store.dispatch(ProfileStoreActions.profileReloadAction())
            this.store.dispatch(ProfileStoreActions.profileLogoutSuccessAction())
            this.router.navigate(['/login'])
          },
        )
      },
    )
  }
}
