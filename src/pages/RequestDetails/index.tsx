/* eslint-disable sonarjs/no-duplicate-string */
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import {
  Box,
  Button,
  Center,
  Flex,
  ScrollView,
  Text,
  TextArea,
  useTheme,
} from 'native-base'
import {
  CircleWavyCheck,
  ClipboardText,
  DesktopTower,
  Hourglass,
} from 'phosphor-react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

import { DetailsCard } from './DetailsCard'
import { RequestData, requestData } from '../../data'
import { Loading } from '../../components/Loading'
import { dateFormat } from '../../utils/firestoreDateFormat'
import { OrderDTO } from '../../DTOs/OrderDto'

export function RequestDetails() {
  const { colors } = useTheme()
  const { params } = useRoute()
  const { goBack } = useNavigation()
  const { id } = params as { id: string }

  const [closingSolution, setClosingSolution] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [details, setDetails] = useState<RequestData>({} as RequestData)

  const loadRequest = useCallback(async () => {
    setDetails(requestData.find(({ id: requestId }) => requestId === id))
  }, [id])

  const isDone = details?.status === 'done'

  const handleSubmit = async () => {
    if (!closingSolution.trim()) {
      Alert.alert('Solicitação', 'Informa a solução para encerrar a solicitação')
      return
    }
    setIsLoading(true)
    firestore()
      .collection<OrderDTO>('orders')
      .doc(id)
      .update({
        status: 'done',
        solution: closingSolution,
        completedAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Solicitação', 'Solicitação encerrada.')
        goBack()
      })
      .catch((error) => {
        console.log(error)
        Alert.alert('Solicitação', 'Não foi possível encerrar a solicitação')
      })
  }

  useEffect(() => {
    loadRequest()
  }, [loadRequest])

  useEffect(() => {
    firestore()
      .collection<OrderDTO>('orders')
      .doc(id)
      .get()
      .then((doc) => {
        const {
          equipament,
          problemDescription,
          status,
          createdAt,
          completedAt,
          solution,
        } = doc.data()

        setDetails({
          id: doc.id,
          equipament,
          problemDescription,
          status,
          solution,
          createdAt: dateFormat(createdAt),
          completedAt: completedAt ? dateFormat(completedAt) : null,
        })

        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Flex flex={1} bg="gray.900" align="center" position="relative">
      {!isDone ? (
        <Center flexDirection="row" w="full" h="10" bg="gray.800" justifyContent="center">
          <Hourglass size={22} color={colors.amber['400']} />
          <Text color={colors.amber['400']} bold ml="1" textTransform="uppercase">
            Em andamento
          </Text>
        </Center>
      ) : (
        <Center flexDirection="row" w="full" h="10" bg="gray.800" justifyContent="center">
          <CircleWavyCheck size={22} color={colors.green['400']} />
          <Text color={colors.green['400']} bold ml="1" textTransform="uppercase">
            finalizado
          </Text>
        </Center>
      )}
      <ScrollView w="full">
        <Center px="4" mt="4" flex={1} pb={16}>
          <DetailsCard
            icon={<DesktopTower size={20} color={colors.blue['400']} />}
            title="Equipamento"
          >
            <Text color="gray.100" fontSize={16} lineHeight={26}>
              {details?.equipament}
            </Text>
          </DetailsCard>
          <DetailsCard
            icon={<ClipboardText size={20} color={colors.blue['400']} />}
            title="descrição do problema"
            registerdAt={details?.createdAt}
          >
            <Text color="gray.100" fontSize={16} lineHeight={26}>
              {details?.problemDescription}
            </Text>
          </DetailsCard>

          <DetailsCard
            icon={<CircleWavyCheck size={20} color={colors.blue['400']} />}
            title="Solução"
            registerdAt={isDone ? details?.completedAt : undefined}
            flex={!isDone ? 1 : 0}
          >
            {isDone ? (
              <Text color="gray.100" fontSize={16} lineHeight={26}>
                {details?.solution}
              </Text>
            ) : (
              <TextArea
                autoCompleteType="off"
                value={closingSolution}
                onChangeText={setClosingSolution}
                flex={1}
                placeholder="Descrição da solução"
              />
            )}
          </DetailsCard>
        </Center>
      </ScrollView>
      {!isDone && (
        <Box w="full" bg="gray.800" p={4} pt={2} position="absolute" bottom="0">
          <Button isLoading={isLoading} onPress={handleSubmit}>
            <Text fontWeight="bold">Finalizar</Text>
          </Button>
        </Box>
      )}
    </Flex>
  )
}
