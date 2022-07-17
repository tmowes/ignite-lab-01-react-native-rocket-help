import React from 'react'

import { Divider, Flex, Row, Text } from 'native-base'
import { format } from 'date-fns'

import { DetailsCardProps } from './types'

export function DetailsCard(props: DetailsCardProps) {
  const { icon, title, children, registerdAt, flex = 0 } = props
  return (
    <Flex
      bg="gray.800"
      p={4}
      w="full"
      borderRadius="md"
      mb={4}
      flex={flex}
      minHeight={flex ? 180 : 0}
    >
      <Row mb="2" alignItems="center">
        {icon}
        <Text
          ml="2"
          color="gray.400"
          textTransform="uppercase"
          fontSize={14}
          lineHeight={22}
        >
          {title}
        </Text>
      </Row>
      {children}
      {registerdAt && (
        <>
          <Divider my="2" bg="gray.700" />
          <Text ml="1" fontSize={12} color="gray.400">
            Registrado em {format(new Date(registerdAt), "dd'/'MM'/'yyyy' às 'hh':'mm")}
          </Text>
        </>
      )}
    </Flex>
  )
}
