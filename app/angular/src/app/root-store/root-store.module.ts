import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AdvertStoreModule } from '@store/advert-store'
import { AdvertsStoreModule } from '@store/adverts-store'
import { ProfileStoreModule } from '@store/profile-store'

@NgModule({
  declarations: [],
  imports: [
    ProfileStoreModule,
    AdvertsStoreModule,
    AdvertStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
})
export class RootStoreModule {
}
