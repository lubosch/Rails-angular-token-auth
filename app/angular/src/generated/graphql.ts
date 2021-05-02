import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Advert = {
  __typename?: 'Advert';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  titleImage: Image;
};

/** The connection type for Advert. */
export type AdvertConnection = {
  __typename?: 'AdvertConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AdvertEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Advert>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type AdvertEdge = {
  __typename?: 'AdvertEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Advert>;
};

export type AdvertsQuery = {
  __typename?: 'AdvertsQuery';
  list: AdvertConnection;
};


export type AdvertsQueryListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Image = {
  __typename?: 'Image';
  filename?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  adverts: AdvertsQuery;
  users: UsersQuery;
};

export type UsersQuery = {
  __typename?: 'UsersQuery';
  profile: Profile;
};

export type ListAdvertsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAdvertsQuery = (
  { __typename?: 'Query' }
  & { adverts: (
    { __typename?: 'AdvertsQuery' }
    & { list: (
      { __typename?: 'AdvertConnection' }
      & Pick<AdvertConnection, 'totalCount'>
      & { nodes?: Maybe<Array<Maybe<(
        { __typename?: 'Advert' }
        & Pick<Advert, 'id' | 'title' | 'description'>
        & { titleImage: (
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'filename' | 'url'>
        ) }
      )>>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'endCursor'>
      ) }
    ) }
  ) }
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UsersQuery' }
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'email'>
    ) }
  ) }
);

export const ListAdvertsDocument = gql`
    query listAdverts {
  adverts {
    list {
      nodes {
        id
        title
        description
        titleImage {
          id
          filename
          url
        }
      }
      pageInfo {
        endCursor
      }
      totalCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListAdvertsGQL extends Apollo.Query<ListAdvertsQuery, ListAdvertsQueryVariables> {
    document = ListAdvertsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProfileDocument = gql`
    query profile {
  users {
    profile {
      id
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
    document = ProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    