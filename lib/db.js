import { MongoClient } from 'mongodb'

export async function connectToDatabase () {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.j7li9.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

  const client = await MongoClient.connect(connectionString)

  return client
}
