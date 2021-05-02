import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { environment } from '@environments/environment'
import { AdvertModel, AdvertModelResponse, AdvertsModelResponse } from '@core/models'

const advertsUrl = `${environment.apiUrl}/bare_api/adverts/adverts.json`
const advertUrl = (id) => `${environment.apiUrl}/bare_api/adverts/adverts/${id}.json`


@Injectable({ providedIn: 'root' })
export class AdvertsService {
  constructor(private http: HttpClient) {
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

  list(): Observable<AdvertModel[]> {
    return this.http
      .get(advertsUrl).pipe(
        map((response: AdvertsModelResponse) => (
          response.data.map((advertResponse: AdvertModelResponse) => ({
            id: advertResponse.id,
            ...advertResponse.attributes,
          }))
        )),
      )
  }
}
