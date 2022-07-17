import React, { useCallback, useEffect, useState } from 'react'

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
  TextAa,
} from 'phosphor-react-native'
import { useRoute } from '@react-navigation/native'

import { DetailsCard } from './DetailsCard'
import { RequestData, requestData } from '../../data'

export function RequestDetails() {
  const { colors } = useTheme()
  const { params } = useRoute()
  const { id } = params as { id: string }
  const [details, setDetails] = useState<RequestData | null>(null)

  const loadRequest = useCallback(async () => {
    setDetails(requestData.find(({ id: requestId }) => requestId === id))
  }, [id])

  const isDone = details?.status === 'done'

  useEffect(() => {
    loadRequest()
  }, [loadRequest])

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
            registerdAt={new Date()}
          >
            <Text color="gray.100" fontSize={16} lineHeight={26}>
              {details?.problemDescription}
            </Text>
          </DetailsCard>

          <DetailsCard
            icon={<CircleWavyCheck size={20} color={colors.blue['400']} />}
            title="Solução"
            registerdAt={isDone ? new Date(details?.completedAt) : undefined}
            flex={!isDone ? 1 : 0}
          >
            {isDone ? (
              <Text color="gray.100" fontSize={16} lineHeight={26}>
                {details?.solution}
              </Text>
            ) : (
              <TextArea
                autoCompleteType="off"
                flex={1}
                placeholder="Descrição da solução"
              />
            )}
          </DetailsCard>
        </Center>
      </ScrollView>
      {!isDone && (
        <Box w="full" bg="gray.800" p={4} pt={2} position="absolute" bottom="0">
          <Button onPress={() => console.log('Complete this request')}>
            <Text fontWeight="bold">Finalizar</Text>
          </Button>
        </Box>
      )}
    </Flex>
  )
}
