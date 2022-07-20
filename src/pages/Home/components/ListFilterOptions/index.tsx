import { Button, Flex, Text } from 'native-base'

import { ListFilterOptionsProps } from './types'

export function ListFilterOptions(props: ListFilterOptionsProps) {
  const { selected, setSelected } = props

  return (
    <Flex direction="row" w="full" justify="space-between" p={4} py={2}>
      <Button
        onPress={() => setSelected('PENDING')}
        variant="outline"
        h="8"
        w="48%"
        p="0"
        mr="2"
        bg="gray.800"
        colorScheme="amber"
        borderColor={selected === 'PENDING' ? 'amber.400' : 'gray.800'}
      >
        <Text
          textTransform="uppercase"
          fontSize={12}
          lineHeight={19}
          color={selected === 'PENDING' ? 'amber.400' : 'gray.400'}
        >
          em andamento
        </Text>
      </Button>
      <Button
        onPress={() => setSelected('DONE')}
        variant="outline"
        h="8"
        w="48%"
        p="0"
        bg="gray.800"
        colorScheme="green"
        borderColor={selected === 'DONE' ? 'green.400' : 'gray.800'}
      >
        <Text
          textTransform="uppercase"
          fontSize={12}
          lineHeight={19}
          color={selected === 'DONE' ? 'green.400' : 'gray.400'}
        >
          finalizados
        </Text>
      </Button>
    </Flex>
  )
}
