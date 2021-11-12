// import React from 'react'
import { Profile } from '../profile'
import { NavButton } from '../nav-button'
import { Dashboard, Debtors, Records, Reports, Tasks } from '../icon'

const SideNav = () => {
  return (
    <aside className="bg-white h-screen px-9 border-r border-gray-light flex flex-col items-center">
      <Profile />
      <nav className="flex flex-col items-center">
        <NavButton path="dashboard" Icon={<Dashboard size="md" />} />
        <NavButton path="tasks" Icon={<Tasks size="md" />} />
        <NavButton path="records" Icon={<Records size="md" />} />
        <NavButton path="debtors" Icon={<Debtors size="md" />} />
        <NavButton path="reports" Icon={<Reports size="md" />} />
      </nav>
    </aside>
  )
}

export default SideNav
