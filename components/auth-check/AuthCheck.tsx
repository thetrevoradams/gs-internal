import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../auth-provider'

const AuthCheck = ({ children }: { children: JSX.Element }) => {
  const { initializing, user } = useContext(AuthContext)
  const router = useRouter()

  if (!initializing && !user) router.push('/signin')

  return <>{!initializing && user ? children : <p>Redirecting...</p>}</>
}

export default AuthCheck
