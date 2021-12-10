import { Bell, LogOut, Search } from '../icon'
import { signOut } from 'next-auth/react'

const TopBar = () => {
  const handleSignOut = () => {
    signOut()
  }
  return (
    <div className="bg-white p-5 w-full border-b border-gray-light flex content-end">
      <div className="flex-grow flex content-end">
        <Search className="text-gray" />
        <span> [Put input here]</span>
      </div>
      <Bell className="text-gray hover:text-blue mr-2" />
      <button onClick={handleSignOut}>
        <LogOut className="text-gray hover:text-blue" />
      </button>
    </div>
  )
}

export default TopBar
