import { useState } from 'react'

import { Button, Flex, Text } from 'native-base'

export function ListFilterOptions() {
  const [selected, setSelected] = useState('DEFAULT')

  return (
    <Flex direction="row" w="full" justify="space-between" p={4} py={2}>
      <Button
        onPress={() => setSelected('OPENS')}
        variant="outline"
        h="8"
        w="48%"
        p="0"
        mr="2"
        bg="gray.800"
        colorScheme={selected === 'OPENS' ? 'orange' : 'gray'}
        borderColor={selected === 'OPENS' ? 'orange.500' : 'gray.800'}
      >
        <Text
          textTransform="uppercase"
          fontSize={12}
          lineHeight={19}
          color={selected === 'OPENS' ? 'orange.500' : 'gray.400'}
        >
          em andamento
        </Text>
      </Button>
      <Button
        onPress={() => setSelected('CLOSED')}
        variant="outline"
        h="8"
        w="48%"
        p="0"
        bg="gray.800"
        colorScheme={selected === 'CLOSED' ? 'green' : 'gray'}
        borderColor={selected === 'CLOSED' ? 'green.500' : 'gray.800'}
      >
        <Text
          textTransform="uppercase"
          fontSize={12}
          lineHeight={19}
          color={selected === 'CLOSED' ? 'green.500' : 'gray.400'}
        >
          finalizados
        </Text>
      </Button>
    </Flex>
  )
}
