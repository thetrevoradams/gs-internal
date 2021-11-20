// import React from 'react';
import { SideNav } from '../side-nav'
import { TopBar } from '../top-bar'

interface Props {
  signOut: VoidFunction
  children: React.ReactNode
}

const Layout = ({ signOut, children }: Props) => {
  return (
    <div className="text-heading-light h-screen flex flex-row">
      <SideNav />
      <div className="flex flex-col w-full">
        <TopBar signOut={signOut} />
        <main className="bg-blue-lighter flex-grow">{children}</main>
      </div>
    </div>
  )
}

export default Layout
