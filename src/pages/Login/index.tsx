import React, { useState } from 'react'

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

export default function Login() {
  const { colors } = useTheme()
  const [show, setShow] = useState(false)
  return (
    <Flex px={8} flex={1} bg="gray_600" align="center">
      <Box my="20">
        <Logo primary={colors.gray_300} secondary={colors.secondary_700} />
      </Box>
      <Stack space={4} w="100%" alignItems="center" mb="auto">
        <Heading mb="2" fontSize={18} lineHeight={32}>
          Acesse sua conta
        </Heading>
        <Input
          placeholder="E-mail"
          placeholderTextColor={colors.gray['500']}
          InputLeftElement={
            <Icon
              as={<Envelope size={24} color={colors.gray['500']} />}
              size={5}
              ml="2"
            />
          }
          w="full"
        />
        <Input
          type={show ? 'text' : 'password'}
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
          placeholder="Senha"
          placeholderTextColor={colors.gray['500']}
          w="full"
        />
        <Button
          mt="2"
          onPress={() => console.log('hello world')}
          w="full"
          isLoading
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
