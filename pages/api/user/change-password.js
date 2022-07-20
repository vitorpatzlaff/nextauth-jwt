import { getSession } from 'next-auth/react'

import { connectToDatabase } from '../../../lib/db'
import { hashPassword, verifyPassword } from '../../../lib/auth'

async function handler (req, res) {
  if (req.method !== 'PATCH') {
    res.status(405).json({ message: `The '${req.method}' method is not allowed` })
    return
  }

  const session = await getSession({ req: req })

  if (!session) {
    res.status(401).json({ message: 'Not autheticated!' })
    return
  }

  const userEmail = session.user.email
  const currentPassword = req.body.currentPassword
  const newPassword = req.body.newPassword

  const client = await connectToDatabase()
  const userCollection = client.db().collection('users')

  const user = await userCollection.findOne({ email: userEmail })

  if (!user) {
    res.status(404).json({ message: 'User not found.' })
    client.close()
    return
  }

  const hashedCurrentPassword = user.password

  const passwordAreEqual = await verifyPassword(currentPassword, hashedCurrentPassword)

  if (!passwordAreEqual) {
    res.status(403).json({ message: 'Invalid password.' })
    client.close()
    return
  }

  const hashedPassword = await hashPassword(newPassword)

  const result = await userCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  )

  client.close()
  res.status(200).json({ message: 'Password updated!' })
}

export default handler
