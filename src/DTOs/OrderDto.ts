import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type OrderDTO = {
  equipament: string
  problemDescription: string
  status: 'pending' | 'done'
  solution?: string
  createdAt: FirebaseFirestoreTypes.Timestamp
  completedAt?: FirebaseFirestoreTypes.Timestamp
}
