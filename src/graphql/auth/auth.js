import jwt from 'jsonwebtoken'
import { GRAPHQL_JWT_SECRET } from '../../graphql/constants'

const FIVE_MINUTES = '5m' // See https://github.com/zeit/ms for valid strings or supply a value in milliseconds here

export const createToken = async (user, secret) => {
  const token = await jwt.sign(user, secret, {
    algorithm: 'HS256',
    expiresIn: FIVE_MINUTES
  })

  return token
}

export const decodeJWT = token => {
  try {
    if (token) {
      const { user } = jwt.verify(token, GRAPHQL_JWT_SECRET)
      return user
    }
    return null
  } catch (err) {
    return null
  }
}

export const checkHTTPRequestForUser = req => {
  try {
    const tokenWithBearer = req.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    return decodeJWT(token)
  } catch (e) {
    console.error(`Error processing token: ${e}`)
  }
}

export const removeAuthenticationToken = () => {
  if (isBrowser()) {
    // Remove the JWT from local storage
    window.localStorage.removeItem('token')
  }
}

export const storeAuthenticationToken = token => {
  if (isBrowser()) {
    // Store the JWT token in local storage
    window.localStorage.setItem('token', token)
    // Store the decoded user in local storage
    const user = decodeJWT(token)
    setUser(user)
  }
}

export const isBrowser = () => typeof window !== 'undefined'

export const isLoggedIn = () => {
  const token =
    isBrowser() && window.localStorage.getItem('token')
      ? window.localStorage.getItem('token')
      : undefined

  if (!token) {
    return false
  }

  try {
    const user = decodeJWT(token)
    return !!user.username
  } catch (e) {
    // If we are unable to successfully validate or decode the token, the user is logged out
    return false
  }
}

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('demoUser')
    ? JSON.parse(window.localStorage.getItem('demoUser'))
    : {}

export const clearUser = () => {
  if (isBrowser()) {
    window.localStorage.removeItem('demoUser')
  }
}

export const setUser = user =>
  window.localStorage.setItem('demoUser', JSON.stringify(user))

export const logout = callback => {
  clearUser()
  removeAuthenticationToken()
  callback()
}
