import { Box, Flex } from 'native-base'

import { useUser } from '../contexts/UserProvider'
import { RequestDetails } from '../pages/RequestDetails'
import PrivateRoutes from './private.routes'
import PublicRoutes from './public.routes'

export default function AppRoutes() {
  const { user } = useUser()

  // return (
  //   <Flex flex={1}>
  //     <Box h="20" bg="black" />
  //     <RequestDetails />
  //   </Flex>
  // )

  if (user) {
    return <PrivateRoutes />
  }

  return <PublicRoutes />
}
