// import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  path: string
}

const NavButton = ({ path }: Props) => {
  const router = useRouter()
  // <li className={router.pathname == "/" ? "active" : ""}>

  return (
    <Link href={`/${path === 'dashboard' ? '/' : path}`}>
      <a className="flex flex-col items-center mb-10 focus:ring-2 focus:ring-blue hover:ring-2 hover:ring-blue">
        <div
          className="bg-blue-light rounded-xl text-blue flex items-center justify-center"
          style={{ height: 60, width: 60 }}
        >
          {' '}
          <span>Icon</span>
        </div>
        <label className="font-semibold tracking-wide">
          <small>{`${path.slice(0, 1).toUpperCase()}${path.slice(1)}`}</small>
        </label>
      </a>
    </Link>
  )
}

export default NavButton
