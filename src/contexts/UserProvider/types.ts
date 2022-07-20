import { Dispatch, ReactNode, SetStateAction } from 'react'

import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export type UserProviderProps = {
  children: ReactNode
}

export type UserContextData = {
  user: FirebaseAuthTypes.User | null
  setUser: Dispatch<SetStateAction<FirebaseAuthTypes.User>>
}
