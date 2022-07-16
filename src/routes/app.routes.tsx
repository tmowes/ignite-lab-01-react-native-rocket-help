import PrivateRoutes from './private.routes'
import PublicRoutes from './public.routes'

export default function AppRoutes() {
  // const { user} = useUser()
  const user = null
  // const user = 'null'

  if (user) {
    return <PrivateRoutes />
  }

  return <PublicRoutes />
}
