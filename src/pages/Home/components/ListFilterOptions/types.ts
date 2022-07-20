import { Dispatch, SetStateAction } from 'react'

export type ListFilterOptionsProps = {
  selected: 'PENDING' | 'DONE'
  setSelected: Dispatch<SetStateAction<'PENDING' | 'DONE'>>
}
