import { createContext, useContext, useMemo, useState } from 'react'

import { UserContextData, UserProviderProps } from './types'

const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<string | null>(null)

  const providerValues = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  )

  return <UserContext.Provider value={providerValues}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}
