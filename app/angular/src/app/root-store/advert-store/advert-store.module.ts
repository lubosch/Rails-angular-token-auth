import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AdvertStoreEffects } from '@store/advert-store/advert.effects'
import { advertReducer } from '@store/advert-store/advert.reducer'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('advert', advertReducer),
    EffectsModule.forFeature([AdvertStoreEffects]),
  ],
  providers: [
    AdvertStoreEffects,
  ],
})
export class AdvertStoreModule {
}
