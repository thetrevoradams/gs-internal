import React from 'react';
// import { Footer } from './Footer';
// import { Navbar } from './Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({children }: Props) => {
  return (
    <div className="text-heading-light bg-blue-lighter h-screen">
      <h1 className="text-2xl">Layout</h1>
      {children}
    </div>
  )
}

export default Layout