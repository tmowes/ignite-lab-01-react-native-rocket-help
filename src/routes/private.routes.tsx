import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export default function PrivateRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
