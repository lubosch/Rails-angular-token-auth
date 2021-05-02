import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '@environments/environment'
import { AdvertModel, AdvertModelResponse } from '@core/models'
import { AdvertConnection, ListAdvertsGQL } from 'src/generated/graphql'

const advertsUrl = `${environment.apiUrl}/bare_api/adverts/adverts.json`
const advertUrl = (id) => `${environment.apiUrl}/bare_api/adverts/adverts/${id}.json`


@Injectable({ providedIn: 'root' })
export class AdvertsService {
  constructor(private http: HttpClient,
              private listAdvertsGQL: ListAdvertsGQL) {
  }

  create(data): Observable<AdvertModel> {
    return this.http
      .post(advertsUrl, data).pipe(
        map((response: { data: AdvertModelResponse }) => ({
          id: response.data.id,
          ...response.data.attributes,
        })),
      )
  }

  get(id: number): Observable<AdvertModel> {
    return this.http
      .get(advertUrl(id)).pipe(
        map((response: { data: AdvertModelResponse }) => ({
          id: response.data.id,
          ...response.data.attributes,
        })),
      )
  }

  list(): Observable<AdvertConnection> {
    return this.listAdvertsGQL.watch().valueChanges.pipe(
      map((result) => result.data.adverts.list as AdvertConnection),
    )
  }
}
