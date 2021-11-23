import { SideNav } from '../side-nav'
import { TopBar } from '../top-bar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="text-heading-light h-screen flex flex-row">
      <SideNav />
      <div className="flex flex-col w-full">
        <TopBar />
        <main className="bg-blue-lighter flex-grow">{children}</main>
      </div>
    </div>
  )
}

export default Layout
