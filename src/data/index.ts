/* eslint-disable sonarjs/no-duplicate-string */
// DUMMY DATA
export const requestData = [
  {
    id: 'patrimonio-1474561',
    equipament: 'Patrimônio 1474561',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution: null,
    completedAt: null,
    createdAt: new Date(2022, 6, 16),
    status: 'pending',
  },
  {
    id: 'patrimonio-1474562',
    equipament: 'Patrimônio 1474562',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution: null,
    completedAt: null,
    createdAt: new Date(2022, 6, 17),
    status: 'pending',
  },
  {
    id: 'patrimonio-1474563',
    equipament: 'Patrimônio 1474563',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution: null,
    completedAt: null,
    createdAt: new Date(2022, 6, 15),
    status: 'pending',
  },
  {
    id: 'patrimonio-1474564',
    equipament: 'Patrimônio 1474564',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution: null,
    completedAt: null,
    createdAt: new Date(2022, 6, 13),
    status: 'pending',
  },
  {
    id: 'patrimonio-1474565',
    equipament: 'Patrimônio 1474565',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    completedAt: new Date(2022, 6, 17),
    createdAt: new Date(2022, 6, 10),
    status: 'done',
  },
  {
    id: 'patrimonio-1474566',
    equipament: 'Patrimônio 1474566',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    completedAt: new Date(2022, 6, 17),
    createdAt: new Date(2022, 6, 11),
    status: 'done',
  },
  {
    id: 'patrimonio-1474567',
    equipament: 'Patrimônio 1474567',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    completedAt: new Date(2022, 6, 17),
    createdAt: new Date(2022, 6, 6),
    status: 'done',
  },
  {
    id: 'patrimonio-1474568',
    equipament: 'Patrimônio 1474568',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution: null,
    completedAt: null,
    createdAt: new Date(2022, 6, 6),
    status: 'pending',
  },
  {
    id: 'patrimonio-1474569',
    equipament: 'Patrimônio 1474569',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    completedAt: new Date(2022, 6, 17),
    createdAt: new Date(2022, 6, 7),
    status: 'done',
  },
  {
    id: 'patrimonio-14745610',
    equipament: 'Patrimônio 14745610',
    problemDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    solution: null,
    completedAt: null,
    createdAt: new Date(2022, 6, 7),
    status: 'pending',
  },
] as RequestData[]

export type RequestData = {
  id: string
  equipament: string
  problemDescription: string
  solution: string | null
  completedAt: Date | string | null
  createdAt: Date | string
  status: 'done' | 'pending'
}
