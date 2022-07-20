import { useState } from 'react'
import { Alert } from 'react-native'

import auth from '@react-native-firebase/auth'
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Stack,
  useTheme,
} from 'native-base'
import { Envelope, Eye, EyeSlash, Key } from 'phosphor-react-native'

import { Logo } from '../../components/Logo'
import { useUser } from '../../contexts/UserProvider'

export default function Login() {
  const { setUser } = useUser()

  const { colors } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos')
      return
    }
    setIsLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error)
        setIsLoading(false)

        if (error.code === 'auth/invalid-email') {
          return Alert.alert('Entrar', 'E-mail inválido.')
        }

        if (error.code === 'auth/wrong-password') {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }

        if (error.code === 'auth/user-not-found') {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }

        return Alert.alert('Entrar', 'Não foi possível acessar')
      })
  }

  return (
    <Flex px={8} flex={1} bg="gray_600" align="center">
      <Box my="20">
        <Logo primary={colors.orange['500']} secondary={colors.blue['500']} />
      </Box>
      <Stack space={4} w="100%" alignItems="center" mb="auto">
        <Heading mb="2" fontSize={18} lineHeight={32} fontFamily="body">
          Acesse sua conta
        </Heading>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          color="gray.300"
          InputLeftElement={
            <Icon
              as={<Envelope size={24} color={colors.gray['500']} />}
              size={5}
              ml="2"
            />
          }
        />
        <Input
          secureTextEntry={!show}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          color="gray.300"
          InputLeftElement={
            <Icon as={<Key size={24} color={colors.gray['500']} />} size={5} ml="2" />
          }
          InputRightElement={
            <IconButton
              icon={
                <Icon
                  as={
                    show ? (
                      <Eye size={24} color={colors.gray['500']} />
                    ) : (
                      <EyeSlash size={24} color={colors.gray['500']} />
                    )
                  }
                />
              }
              _pressed={{ bg: 'transparent' }}
              size={8}
              mr="1"
              borderRadius="full"
              onPress={() => setShow(!show)}
            />
          }
        />
        <Button
          onPress={handleSignin}
          mt="2"
          isLoading={isLoading}
          isLoadingText="Entrando..."
          _loading={{
            bg: 'secondary_700:alpha.70',
            _text: {
              color: 'white',
            },
          }}
        >
          Entrar
        </Button>
      </Stack>
    </Flex>
  )
}
