import dotenv from 'dotenv'
dotenv.config()

import elvanto from 'elvanto-api'

const env: {
  ELVANTO_CLIENT_ID: string
  ELVANTO_CLIENT_SECRET: string
  ELVANTO_OAUTH_RETURN: string
  CODE?: string
} = process.env as any

/**
 * https://www.elvanto.com/api/getting-started/
 */
const SCOPES = ['ManagePeople']

export const authorizeURL = elvanto.authorizeUrl(
  env.ELVANTO_CLIENT_ID,
  env.ELVANTO_OAUTH_RETURN,
  SCOPES
)
export const authoriseURL = authorizeURL

export const exchangeToken = async (token: string) => {
  let tokenResponse = await elvanto.exchangeToken(
    env.ELVANTO_CLIENT_ID,
    env.ELVANTO_CLIENT_SECRET,
    token,
    env.ELVANTO_OAUTH_RETURN
  )

  console.log(tokenResponse)
  return tokenResponse
}
