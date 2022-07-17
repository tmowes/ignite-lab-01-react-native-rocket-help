import { ReactNode } from 'react'

export type DetailsCardProps = {
  icon: ReactNode
  title: string
  children: ReactNode
  registerdAt?: Date
  flex?: number
}
