// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function helloAPI(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  res.send(JSON.stringify(session, null, 2))
}
