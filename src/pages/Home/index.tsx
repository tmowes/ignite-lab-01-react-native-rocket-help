import { useNavigation } from '@react-navigation/native'
import { Box, Button, FlatList, Flex, Text } from 'native-base'

import { EmptyMessage } from './components/EmptyMessage'
import { ListFilterOptions } from './components/ListFilterOptions'
import { ListHeader } from './components/ListHeader'
import { RequestCard } from './components/RequestCard'

export default function Home() {
  const { navigate } = useNavigation()
  const requestsData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  return (
    <Flex flex={1} bg="gray.900" align="center" justify="center" position="relative">
      <ListHeader />
      <ListFilterOptions />
      {requestsData.length > 0 ? (
        <FlatList
          data={requestsData}
          w="full"
          px={4}
          _contentContainerStyle={{ pb: 20 }}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <RequestCard data={item} />}
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
