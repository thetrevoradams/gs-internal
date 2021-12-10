import { useContext } from 'react'
import { Layout, AuthContext, Card, Table } from '../components'

const tableItems = {
  headings: ['Debtor', 'Reason'],
  rows: [
    { id: 'item1', data: ['test1', 'test6'] },
    { id: 'item2', data: ['test2', 'test7'] },
    { id: 'item3', data: ['test3', 'test8'] },
    { id: 'item4', data: ['test4', 'test9'] },
    { id: 'item5', data: ['test5', 'test10'] },
  ],
}

const Home = () => {
  const { initializing, user } = useContext(AuthContext)

  const fetchData = async () => {
    const resp = await fetch('/api/hello')
    const json = await resp.json()
    console.log(
      'json',
      json.map((item) => item.taskName)
    )
  }

  return (
    <>
      <Layout>
        <p>Signed in as {user?.email}</p>
        <div>Dashboard</div>
        <button onClick={fetchData}>Get basic data</button>
        <Card className="m-10">
          <h2 className="text-heading text-3xl ml-8 mb-4 font-extrabold">Priority List</h2>
          <Table className="mr-4" headings={tableItems.headings} rows={tableItems.rows} />
        </Card>
      </Layout>
    </>
  )
}

export default Home
Home.requireAuth = true
