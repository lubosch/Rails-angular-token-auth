import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AdvertsStoreEffects } from '@store/adverts-store/adverts.effects'
import { advertsReducer } from '@store/adverts-store/adverts.reducer'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('adverts', advertsReducer),
    EffectsModule.forFeature([AdvertsStoreEffects]),
  ],
  providers: [
    AdvertsStoreEffects,
  ],
})
export class AdvertsStoreModule {
}
