import React, { useState } from 'react'
import { Alert } from 'react-native'

import { Box, Button, Flex, Input, Stack, Text, TextArea } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

export function NewRequest() {
  const [isLoading, setIsLoading] = useState(false)
  const [equipament, setEquipament] = useState('')
  const [problemDescription, setProblemDescription] = useState('')

  const { goBack } = useNavigation()

  const handleSubmit = async () => {
    if (!equipament.trim() || !problemDescription.trim()) {
      Alert.alert('Registrar', 'Preencha todos os campos.')
      return
    }
    setIsLoading(true)
    firestore()
      .collection('orders')
      .add({
        equipament,
        problemDescription,
        status: 'pending',
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Solicitação', 'Solicitação registrada com sucesso.')
        goBack()
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        return Alert.alert('Solicitação', 'Não foi possível registrar o pedido')
      })
  }

  return (
    <Flex flex={1} bg="gray.800" align="center" justify="center" position="relative">
      <Stack space={4} alignSelf="center" px="4" safeArea w="100%" flex={1} pb={16}>
        <Input
          color="gray.300"
          placeholder="Número do Patrimônio"
          value={equipament}
          onChangeText={setEquipament}
        />
        <TextArea
          color="gray.300"
          autoCompleteType="off"
          value={problemDescription}
          onChangeText={setProblemDescription}
          flex={1}
          placeholder="Descrição do problema"
          // isInvalid
          mb="5"
        />
      </Stack>
      <Box w="full" bg="gray.800" p={4} pt={2} position="absolute" bottom="0">
        <Button isLoading={isLoading} onPress={handleSubmit}>
          <Text bold fontFamily="body">
            Cadastrar
          </Text>
        </Button>
      </Box>
    </Flex>
  )
}
