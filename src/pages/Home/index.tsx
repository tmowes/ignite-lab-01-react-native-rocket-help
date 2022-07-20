/* eslint-disable sonarjs/prefer-immediate-return */
import { useCallback, useEffect, useState } from 'react'

import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { Box, Button, FlatList, Flex, Text } from 'native-base'
import { format } from 'date-fns'

import { EmptyMessage } from './components/EmptyMessage'
import { ListFilterOptions } from './components/ListFilterOptions'
import { ListHeader } from './components/ListHeader'
import { RequestCard } from './components/RequestCard'
import { OrderProps } from './components/types'
import { Loading } from '../../components/Loading'

export default function Home() {
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState<'PENDING' | 'DONE'>('PENDING')
  const [data, setData] = useState<OrderProps[]>([])
  const [filterData, setFilterData] = useState<OrderProps[]>([])

  const filterPending = useCallback(() => {
    setFilterData(data.filter(({ status }) => status === 'pending'))
  }, [data])

  const filterDone = useCallback(() => {
    setFilterData(data.filter(({ status }) => status === 'done'))
  }, [data])

  useEffect(() => {
    setIsLoading(true)

    const subscriber = firestore()
      .collection('orders')
      .where('status', '==', selected.toLowerCase())
      .onSnapshot((snapshot) => {
        const response = snapshot.docs.map((doc) => {
          const { equipament, problemDescription, status, createdAt } = doc.data()
          return {
            id: doc.id,
            equipament,
            problemDescription,
            status,
            createdAt: format(new Date(createdAt.toDate()), "dd/MM/yyyy' às 'hh'h'"),
          }
        })
        setData(response)
        setFilterData(response)
        setIsLoading(false)
      })

    return subscriber
  }, [selected])

  return (
    <Flex flex={1} bg="gray.900" align="center" justify="center" position="relative">
      <ListHeader requestsTotal={filterData.length} />
      <ListFilterOptions selected={selected} setSelected={setSelected} />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={filterData}
          w="full"
          px={4}
          _contentContainerStyle={{ pb: 20 }}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => <RequestCard {...item} />}
          ListEmptyComponent={() => <EmptyMessage />}
        />
      )}

      <Box w="full" bg="gray.800" p={4} pt={2} position="absolute" bottom="0">
        <Button onPress={() => navigate('NewRequest')}>
          <Text bold>Nova solicitação</Text>
        </Button>
      </Box>
    </Flex>
  )
}
