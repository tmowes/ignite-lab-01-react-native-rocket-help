import { Flex, Heading, Text } from 'native-base'

export function ListHeader() {
  return (
    <Flex direction="row" w="full" justify="space-between" px={4} py={1}>
      <Heading fontSize={20} lineHeight={32}>
        Solicitações
      </Heading>
      <Text fontSize={16} lineHeight={26}>
        0
      </Text>
    </Flex>
  )
}
