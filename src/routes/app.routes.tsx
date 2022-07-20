import { useUser } from '../contexts/UserProvider'
import PrivateRoutes from './private.routes'
import PublicRoutes from './public.routes'

export default function AppRoutes() {
  const { user } = useUser()

  if (user) {
    return <PrivateRoutes />
  }

  return <PublicRoutes />
}
