import { useState } from 'react'

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
  const [show, setShow] = useState(false)
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
          InputLeftElement={
            <Icon
              as={<Envelope size={24} color={colors.gray['500']} />}
              size={5}
              ml="2"
            />
          }
        />
        <Input
          type={show ? 'text' : 'password'}
          placeholder="Senha"
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
          onPress={() => setUser('julius')}
          mt="2"
          // isLoading
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
