// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'
// // import { MongoClient } from 'mongodb'

export async function middleware(req: NextRequest) {
  //   // const session = await getSession({ req })
  //   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  //   console.log('token', { token })
  //   if (token) {
  //     return new Response(JSON.stringify({ token }), { status: 200 })
  //   } else {
  //     // Not signed in
  //     return NextResponse.redirect('/signin')
  //     // return new Response('Forbidden', { status: 403 })
  //   }
  // res.end()
}
