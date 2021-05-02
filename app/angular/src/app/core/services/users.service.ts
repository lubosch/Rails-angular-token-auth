import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Profile, ProfileGQL } from '@graphql/graphql'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient,
              private profileGQL: ProfileGQL) {
  }

  profile(): Observable<Profile> {
    return this.profileGQL.fetch({})
      .pipe(
        map((result) => result.data.users.profile),
      )
  }
}
