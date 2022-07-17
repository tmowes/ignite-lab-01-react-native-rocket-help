import { Flex, Heading, Text } from 'native-base'

import { requestData } from '../../../../data'

export function ListHeader() {
  const requestsTotal = requestData.length
  return (
    <Flex direction="row" w="full" justify="space-between" p={4} pb={1}>
      <Heading fontSize={20} lineHeight={32}>
        Solicitações
      </Heading>
      <Text fontSize={16} lineHeight={26}>
        {requestsTotal}
      </Text>
    </Flex>
  )
}
