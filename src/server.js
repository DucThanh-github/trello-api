/* eslint-disable no-console */

import express from 'express'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb.js'
import env from './config/environment.js'
import asyncExitHook from 'async-exit-hook'
import { APIs_V1 } from './routes/v1'
const START_SERVER = () => {
  const app = express()
  const hostname = env.APP_HOST
  const port = env.APP_PORT

  app.use('/v1', APIs_V1)

  app.listen(port, hostname, () => {
    console.log(`Hello , I am running at ${hostname}:${port}/`)
  })

  asyncExitHook(() => {
    console.log('Closing database connection...')
    CLOSE_DB()
  })
}
  ; (async () => {
    try {
      console.log('1> Starting server...')
      await CONNECT_DB()
      console.log('2> Connected to database')
      START_SERVER()
    } catch (error) {
      console.error('Error starting server:', error)
      process.exit(0)
    }
  })()

