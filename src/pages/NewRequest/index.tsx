import React from 'react'

import { Box, Button, Flex, Input, Stack, Text, TextArea } from 'native-base'

export function NewRequest() {
  return (
    <Flex flex={1} bg="gray.800" align="center" justify="center" position="relative">
      <Stack space={4} alignSelf="center" px="4" safeArea w="100%" flex={1} pb={16}>
        <Input placeholder="Número do Patrimônio" />
        <TextArea
          autoCompleteType="off"
          flex={1}
          placeholder="Descrição do problema"
          isInvalid
          mb="5"
        />
      </Stack>
      <Box w="full" bg="gray.800" p={4} pt={2} position="absolute" bottom="0">
        <Button onPress={() => console.log('Create New Request')}>
          <Text bold fontFamily="body">
            Cadastrar
          </Text>
        </Button>
      </Box>
    </Flex>
  )
}
