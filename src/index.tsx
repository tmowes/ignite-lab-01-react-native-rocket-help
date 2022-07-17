import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NativeBaseProvider } from 'native-base'

import AppRoutes from './routes/app.routes'
import { theme } from './theme/theme'
import { UserProvider } from './contexts/UserProvider'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
          <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  )
}
