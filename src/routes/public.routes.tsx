import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login'

const { Navigator, Screen } = createNativeStackNavigator()

export default function PublicRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}
