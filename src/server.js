/* eslint-disable no-console */
import express from 'express'
import { CONNECT_DB, GET_DB } from './config/mongodb.js'

const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    console.log(`Hello , I am running at ${hostname}:${port}/`)
  })
}
;(async () => {
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

// CONNECT_DB()
//   .then(() => console.log('connected to database'))
//   .then(() => START_SERVER())
//   .catch((err) => {
//     console.error('Failed to connect to database:', err)
//     process.exit(0)
//   })
