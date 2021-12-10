// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DATABASE_URL)

export default async function getPriorityList(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (session) {
    await client.connect()
    const db = client.db('guarantySolutions')

    const userPriorityItems = await db
      .collection('debtors')
      .find({
        collectorUserId: session?.user?.id || '',
        priorityReason: { $exists: true, $ne: '' },
      })
      .limit(20)
      .toArray()
    res.json(userPriorityItems)
    // Signed in
  } else {
    // Not signed in
    res.status(401)
  }

  res.end()
}
