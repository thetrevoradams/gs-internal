// import React from 'react'
import { Bell, LogOut, Search } from '../icon'

interface Props {
  signOut: VoidFunction
}

const TopBar = ({ signOut }: Props) => {
  return (
    <div className="bg-white p-5 w-full border-b border-gray-light flex content-end">
      <div className="flex-grow flex content-end">
        <Search className="text-gray" />
        <span>input here</span>
      </div>
      <Bell className="text-gray hover:text-blue mr-2" />
      <button onClick={signOut}>
        <LogOut className="text-gray hover:text-blue" />
      </button>
    </div>
  )
}

export default TopBar
