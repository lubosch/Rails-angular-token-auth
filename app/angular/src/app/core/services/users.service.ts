import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { environment } from '@environments/environment'
import { UserModel, UserModelResponse } from '@core/models'

const profileUrl = `${environment.apiUrl}/bare_api/users/profiles.json`


@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {
  }

  profile(): Observable<UserModel> {
    return this.http
      .get(profileUrl).pipe(
        map((response: { data: UserModelResponse }) => ({
          id: response.data.id,
          ...response.data.attributes,
        })),
      )
  }
}
