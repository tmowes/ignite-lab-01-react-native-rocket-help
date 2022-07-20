import {
  Center,
  Column,
  Flex,
  Heading,
  IconButton,
  Row,
  Text,
  useTheme,
} from 'native-base'
import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native'
// import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

import { RequestCardProps } from './types'

export function RequestCard(props: RequestCardProps) {
  const { id, equipament, createdAt, status } = props
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  const isDone = status === 'done'
  return (
    <Center flex={1}>
      <Flex
        my="2"
        p="4"
        h="20"
        w="full"
        bg="gray.800"
        direction="row"
        borderRadius="md"
        justify="space-between"
        borderLeftColor={isDone ? 'green.400' : 'amber.400'}
        borderLeftWidth={8}
      >
        <Column justifyContent="space-between">
          <Heading fontSize={16} lineHeight={26}>
            {equipament}
          </Heading>
          <Row alignItems="center">
            <ClockAfternoon size={18} color={colors.gray['400']} />
            <Text ml="1" fontSize={12} lineHeight={19} color={colors.gray['400']}>
              {/* {format(new Date(createdAt), "dd/MM/yyyy' às 'hh'h'")} */}
              {createdAt}
            </Text>
          </Row>
        </Column>
        <IconButton
          onPress={() => navigate('RequestDetails', { id })}
          icon={
            isDone ? (
              <CircleWavyCheck size={22} color={colors.green['400']} />
            ) : (
              <Hourglass size={22} color={colors.amber['400']} />
            )
          }
          bg="gray.700"
          my="auto"
        />
      </Flex>
    </Center>
  )
}
