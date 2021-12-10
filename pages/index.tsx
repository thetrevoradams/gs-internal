import { useEffect, useState } from 'react'
import { Layout, Card, Table, H1, H2 } from '../components'

const tableItems = {
  headings: ['Debtor', 'Reason'],
  rows: [],
}

const Home = () => {
  // const { user } = useContext(AuthContext)
  const [priorityRows, setPriorityRows] = useState()

  const fetchData = async () => {
    const resp = await fetch('/api/priority')
    const json = await resp.json()
    if (json.length) {
      const rows = json.map((item) => ({
        id: item._id,
        data: [`${item.firstName} ${item.lastName}`, item.priorityReason],
      }))
      setPriorityRows(rows)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Layout>
        <H1 className="m-8">Dashboard</H1>
        <Card className="m-8">
          <H2 className="ml-8 mb-4 font-extrabold">Priority List</H2>
          <Table className="mr-4" headings={tableItems.headings} rows={priorityRows} />
        </Card>
      </Layout>
    </>
  )
}

export default Home
Home.requireAuth = true
