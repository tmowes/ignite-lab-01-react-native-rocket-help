import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IconButton, useTheme } from 'native-base'
import { CaretLeft, SignOut } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import Home from '../pages/Home'
import { NewRequest } from '../pages/NewRequest'
import { RequestDetails } from '../pages/RequestDetails'
import { LogoH } from '../components/LogoH'
import { useUser } from '../contexts/UserProvider'

const { Navigator, Screen } = createNativeStackNavigator()

export default function PrivateRoutes() {
  const { colors } = useTheme()
  const { setUser } = useUser()
  const { goBack } = useNavigation()

  function CustomGoBackButtom() {
    return (
      <IconButton
        onPress={goBack}
        icon={<CaretLeft size={24} color={colors.gray['500']} weight="bold" />}
      />
    )
  }

  function CustomSignOutButton() {
    return (
      <IconButton
        onPress={() => setUser(null)}
        icon={<SignOut size={24} color={colors.gray['500']} weight="bold" />}
      />
    )
  }

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <LogoH primary={colors.orange['500']} secondary={colors.blue['500']} />
          ),
          headerRight: () => <CustomSignOutButton />,
          title: '',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.gray['800'],
          },
        }}
      />
      <Screen
        name="NewRequest"
        component={NewRequest}
        options={{
          headerLeft: () => <CustomGoBackButtom />,
          title: 'Nova Solicitação',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.gray['800'],
          },
        }}
      />
      <Screen
        name="RequestDetails"
        component={RequestDetails}
        options={{
          headerLeft: () => <CustomGoBackButtom />,
          title: 'Solicitação',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.gray['800'],
          },
        }}
      />
    </Navigator>
  )
}
