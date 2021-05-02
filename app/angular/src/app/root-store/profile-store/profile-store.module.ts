import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileStoreEffects } from '@app/root-store/profile-store/profile.effects'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { profileReducer } from '@store/profile-store/profile.reducer'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([ProfileStoreEffects]),
  ],
  providers: [
    ProfileStoreEffects,
  ],
})
export class ProfileStoreModule {
}
