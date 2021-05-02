import { NgModule } from '@angular/core'
import { environment } from '@environments/environment'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core'
import { HttpLink } from 'apollo-angular/http'

const uri = `${environment.apiUrl}/graphql` // <-- add the URL of the GraphQL server here
export const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => ({
  link: httpLink.create({ uri }),
  cache: new InMemoryCache(),
})

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}
