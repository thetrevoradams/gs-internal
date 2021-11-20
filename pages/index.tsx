// import React from 'react'
import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Layout } from '../components/layout'

const Home: NextPage = () => {
  const sessionData = useSession()
  const { data: session, status } = sessionData
  return (
    <>
      {session && status === 'authenticated' ? (
        <Layout signOut={signOut}>
          <p>Signed in as {session?.user?.email}</p>
          <div>Dashboard</div>
        </Layout>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </>
  )
}

export default Home
