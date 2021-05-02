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
