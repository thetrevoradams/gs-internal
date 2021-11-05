// import React from 'react'
import { Profile } from '../profile'
import { NavButton } from '../nav-button'

const SideNav = () => {
  return (
    <aside className="bg-white h-screen px-9 border-r border-gray-light flex flex-col items-center">
      <Profile />
      <nav className="flex flex-col items-center">
        <NavButton path="dashboard" />
        <NavButton path="tasks" />
        <NavButton path="records" />
        <NavButton path="debtors" />
        <NavButton path="reports" />
      </nav>
    </aside>
  )
}

export default SideNav
