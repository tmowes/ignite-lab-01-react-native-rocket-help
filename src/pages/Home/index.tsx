import { useCallback, useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { Box, Button, FlatList, Flex, Text } from 'native-base'

import { requestData } from '../../data'
import { EmptyMessage } from './components/EmptyMessage'
import { ListFilterOptions } from './components/ListFilterOptions'
import { ListHeader } from './components/ListHeader'
import { RequestCard } from './components/RequestCard'

export default function Home() {
  const { navigate } = useNavigation()
  const [data, setData] = useState(requestData)

  const filterPending = useCallback(() => {
    setData(requestData.filter(({ status }) => status === 'pending'))
  }, [])

  const filterDone = useCallback(() => {
    setData(requestData.filter(({ status }) => status === 'done'))
  }, [])

  return (
    <Flex flex={1} bg="gray.900" align="center" justify="center" position="relative">
      <ListHeader />
      <ListFilterOptions filterPending={filterPending} filterDone={filterDone} />
      {data.length > 0 ? (
        <FlatList
          data={data}
          w="full"
          px={4}
          _contentContainerStyle={{ pb: 20 }}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => <RequestCard {...item} />}
        />
      ) : (
        <EmptyMessage />
      )}

      <Box w="full" bg="gray.800" p={4} pt={2} position="absolute" bottom="0">
        <Button onPress={() => navigate('NewRequest')}>
          <Text bold>Nova solicitação</Text>
        </Button>
      </Box>
    </Flex>
  )
}
