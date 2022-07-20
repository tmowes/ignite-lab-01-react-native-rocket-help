import { Stack, Text } from 'native-base'
import Svg, { Path } from 'react-native-svg'

import { EmptyMessageProps } from './types'

export function EmptyMessage(props: EmptyMessageProps) {
  const { color = '#323238' } = props
  return (
    <Stack space={4} w="100%" alignItems="center" p={16} mb="auto">
      <Svg width={41} height={40} fill="none" {...props}>
        <Path
          d="M20.371 2.475c-4.731 0-9.27 1.846-12.616 5.132C4.41 10.893 2.528 15.351 2.528 20v17.208a.31.31 0 0 0 .197.294c.039.015.08.023.121.023h17.525c2.343 0 4.663-.454 6.827-1.334a17.87 17.87 0 0 0 5.789-3.798 17.509 17.509 0 0 0 3.869-5.686A17.253 17.253 0 0 0 38.214 20c0-2.302-.461-4.581-1.358-6.707a17.508 17.508 0 0 0-3.869-5.686 17.869 17.869 0 0 0-5.789-3.798 18.125 18.125 0 0 0-6.827-1.334Zm0 37.525h-17.5a2.893 2.893 0 0 1-1.1-.206 2.848 2.848 0 0 1-.94-.612 2.784 2.784 0 0 1-.622-.921A2.74 2.74 0 0 1 0 37.185V20C0 14.697 2.146 9.61 5.965 5.86 9.785 2.107 14.967 0 20.371 0a20.7 20.7 0 0 1 7.797 1.523 20.4 20.4 0 0 1 6.609 4.336 19.98 19.98 0 0 1 4.415 6.488A19.685 19.685 0 0 1 40.742 20c0 2.626-.526 5.226-1.55 7.652a19.98 19.98 0 0 1-4.415 6.489 20.4 20.4 0 0 1-6.609 4.336A20.7 20.7 0 0 1 20.371 40Z"
          fill={color}
        />
        <Path
          d="M12.461 17.553c0-.684.566-1.238 1.264-1.238h12.461c.699 0 1.265.554 1.265 1.238 0 .683-.566 1.237-1.265 1.237h-12.46a1.251 1.251 0 0 1-1.265-1.237ZM12.461 24.079c0-.684.566-1.238 1.264-1.238h12.461c.699 0 1.265.554 1.265 1.238 0 .683-.566 1.237-1.265 1.237h-12.46a1.251 1.251 0 0 1-1.265-1.237Z"
          fill={color}
        />
      </Svg>
      <Text fontSize={20} textAlign="center" color="trueGray.600" lineHeight="lg">
        Você ainda não tem solicitações criadas
      </Text>
    </Stack>
  )
}
