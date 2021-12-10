// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DATABASE_URL)

export default async function helloAPI(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (session) {
    await client.connect()
    // req.dbClient = client
    const db = client.db('guarantySolutions')
    // return next()

    const tasks = await db
      .collection('tasks')
      .find({ assigneeId: session?.user?.id || '' })
      // .find({})
      .limit(20)
      .toArray()
    res.json(tasks)
    // Signed in
    // console.log('Tasks', JSON.stringify(tasks, null, 2))
  } else {
    // Not signed in
    res.status(401)
  }

  res.end()
}
