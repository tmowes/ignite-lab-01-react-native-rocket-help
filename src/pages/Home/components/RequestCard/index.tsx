import {
  Center,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Row,
  Text,
  useTheme,
} from 'native-base'
import { ClockAfternoon, Hourglass } from 'phosphor-react-native'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

export function RequestCard({ data }: { data: string }) {
  const { colors } = useTheme()
  const { navigate } = useNavigation()
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
        borderLeftColor="orange.500"
        borderLeftWidth={8}
      >
        <Column justifyContent="space-between">
          <Heading fontSize={16} lineHeight={26}>
            Patrimônio 147456{data}
          </Heading>
          <Row alignItems="center">
            <ClockAfternoon size={18} color={colors.gray['400']} />
            <Text ml="1" fontSize={12} lineHeight={19} color={colors.gray['400']}>
              {format(new Date(), "dd'/'MM'/'yyyy' às 'hh'h'")}
            </Text>
          </Row>
        </Column>
        <IconButton
          onPress={() => navigate('RequestDetails')}
          icon={<Icon as={<Hourglass size={22} color={colors.orange['500']} />} />}
          bg="gray.700"
          my="auto"
        />
      </Flex>
    </Center>
  )
}
