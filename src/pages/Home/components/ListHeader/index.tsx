import { Flex, Heading, Text } from 'native-base'

import { ListHeaderProps } from './types'

export function ListHeader(props: ListHeaderProps) {
  const { requestsTotal = 0 } = props
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
