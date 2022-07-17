import { Dispatch, ReactNode, SetStateAction } from 'react'

export type UserProviderProps = {
  children: ReactNode
}

export type UserContextData = {
  user: string | null
  setUser: Dispatch<SetStateAction<string>>
}
