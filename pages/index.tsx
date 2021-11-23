import { useContext } from 'react'
import { Layout, AuthContext } from '../components'

const Home = () => {
  const { initializing, user } = useContext(AuthContext)

  return (
    <>
      <Layout>
        <p>Signed in as {user?.email}</p>
        <div>Dashboard</div>
      </Layout>
    </>
  )
}

export default Home
Home.requireAuth = true
