/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

// acc mongodb: thanh_nguyen (Thanh@10121995)



import { MongoClient, ServerApiVersion } from 'mongodb'
import env from './environment.js'


const { MONGODB_URI, DATABASE_NAME } = env
let trelloDatabaseInstance = null

// Khởi tạo 1 doi tuong MongoClient de ket noi mongodb
const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// ket noi db
export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) {
    throw new Error('Must connect to database first')
  }
  return trelloDatabaseInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}
