import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { authoriseURL, exchangeToken } from './elvanto'

const app = express()

app.get('/login', (req, res) => {
  return res.redirect(authoriseURL)
})

app.get('/login/oauth', async (req, res) => {
  const { code } = req.query
  if (!code) {
    res.status(400)
    return res.json({ status: false })
  }

  let tokenResponse = await exchangeToken(code as string)
  console.log(tokenResponse)
  return res.json(tokenResponse)
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})
