import React from 'react'

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

import { DetailsCard } from './DetailsCard'

export function RequestDetails() {
  const { colors } = useTheme()
  const isDone = true
  return (
    <Flex flex={1} bg="gray.900" align="center" position="relative">
      {!isDone ? (
        <Center flexDirection="row" w="full" h="10" bg="gray.800" justifyContent="center">
          <Hourglass size={22} color={colors.orange['500']} />
          <Text color={colors.orange['500']} bold ml="1" textTransform="uppercase">
            Em andamento
          </Text>
        </Center>
      ) : (
        <Center flexDirection="row" w="full" h="10" bg="gray.800" justifyContent="center">
          <CircleWavyCheck size={22} color={colors.green['500']} />
          <Text color={colors.green['500']} bold ml="1" textTransform="uppercase">
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
              Patrimônio 123456
            </Text>
          </DetailsCard>
          <DetailsCard
            icon={<ClipboardText size={20} color={colors.blue['400']} />}
            title="descrição do problema"
            registerdAt={new Date()}
          >
            <Text color="gray.100" fontSize={16} lineHeight={26}>
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </Text>
          </DetailsCard>

          <DetailsCard
            icon={<CircleWavyCheck size={20} color={colors.blue['400']} />}
            title="Solução"
            registerdAt={isDone ? new Date() : undefined}
            flex={!isDone ? 1 : 0}
          >
            {isDone ? (
              <Text color="gray.100" fontSize={16} lineHeight={26}>
                Lorem Ipsum has been the industry standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </Text>
            ) : (
              <TextArea
                autoCompleteType="off"
                flex={1}
                placeholder="Descrição do problema"
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
