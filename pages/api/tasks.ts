// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DATABASE_URL)

export default async function getUserTasks(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (session) {
    await client.connect()
    const db = client.db('guarantySolutions')

    const tasks = await db
      .collection('tasks')
      .find({ assigneeId: session?.user?.id || '' })
      .limit(20)
      .toArray()
    res.json(tasks)
    // Signed in
  } else {
    // Not signed in
    res.status(401)
  }

  res.end()
}
