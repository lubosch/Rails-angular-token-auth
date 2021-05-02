export interface UserModel {
  id: number
  email: string
  password?: string
  firstName?: string
  lastName?: string
  jwtToken?: string
}

export interface UserModelResponse {
  id: number
  attributes: {
    email: string
  }
}

export interface AdvertModel {
  id: number
  title: string
  description: string
  price: number
  titleImage: ImageModel
}

export interface AdvertModelResponse {
  id: number
  attributes: {
    price: number
    title: string
    description: string
    titleImage: ImageModel
  }
}

export interface ImageModel {
  url: string
  filename: string
}

export interface ImageModelResponse {
  data: {
    id: number
    attributes: {
      url: string
      filename: string
    }
  }
}

export interface AdvertsModelResponse {
  data: AdvertModelResponse[]
  pageInfo: PageInfoModel
}

export interface PageInfoModel {
  page: number
  totalPages: number
}

export interface UserData {
  id: number
  provider: string
  uid: string
  name: string
  nickname: string
  image: any
  login: string
}

export interface TokenModel {
  accessToken: string
  tokenType: string
  expiresIn: number
  refreshToken: string
  createdAt: number
}
