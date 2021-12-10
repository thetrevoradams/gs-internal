interface Props {
  headings?: string[]
  rows: {
    id: string
    data: string[]
  }[]
  className?: string
  showBorder?: boolean
}

const Table = ({ headings = [], rows = [], className = '', showBorder = false }: Props) => {
  return (
    <div className={showBorder ? 'border rounded-md border-blue-table' : ''}>
      <table className={`border-collapse table-auto w-full ${className}`}>
        {headings.length && (
          <thead>
            <tr>
              {headings.map((h) => (
                <th key={h} className="pr-4 pl-8 py-3 text-left text-heading font-normal">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map(({ id, data }) => (
            <tr key={id} v-for="item in items" className="even:bg-blue-table">
              {data.map((name, index) => (
                <td
                  key={name}
                  className={`p-4 pl-8 
                  text-sm font-extralight ${index === 0 ? 'text-heading' : 'text-heading-light'}`}
                >
                  {name}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
