import React from 'react'

import { Button, Flex } from 'native-base'

export default function Home() {
  return (
    <Flex px={8} flex={1} bg="trueGray.900" align="center" justify="center">
      <Button onPress={() => console.log('hello world')} w="full">
        Home
      </Button>
    </Flex>
  )
}
