// import React from 'react'
import { Bell, LogOut, Search } from '../icon'

const TopBar = () => {
  return (
    <div className="bg-white p-5 w-full border-b border-gray-light flex content-end">
      <div className="flex-grow flex content-end">
        <Search className="text-gray" />
        <span>input here</span>
      </div>
      <Bell className="text-gray hover:text-blue mr-2" />
      <LogOut className="text-gray hover:text-blue" />
    </div>
  )
}

export default TopBar
