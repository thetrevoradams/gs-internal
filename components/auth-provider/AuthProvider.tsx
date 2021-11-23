import { createContext, useReducer, Reducer, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'

const initialState = {
  initializing: true,
  user: null,
  session: null,
}
interface State {
  initializing: boolean
  user: null | object
  session: null | object
}

interface Action {
  type: string
  session: null | any
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        initializing: false,
        session: action.session,
        user: action.session?.user,
      }

    default:
      return state
  }
}

const AuthContext = createContext<State | null>(null)

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { data: session, status } = useSession()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { initializing } = state

  const initializeData = useCallback(() => {
    if (initializing) dispatch({ type: 'init', session })
  }, [session, initializing])

  useEffect(() => {
    if (status !== 'loading') {
      initializeData()
    }
  }, [status, initializeData])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
