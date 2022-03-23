import React from 'react'
import styled from 'styled-components'

const RangePath = styled('path')`
  fill: ${({ fill }) => fill};
`

interface RangePathIconProps {
  fill?: string
}

export default function RangePathIcon({
  fill = '#E6E8EC',
}: RangePathIconProps) {
  return (
    <RangePath
      d='M0 8C0 6.88924 0.889079 5.98285 1.99963 5.96142L303.001 0.154312C307.394 0.0695737 311 3.60691 311 8C311 12.3931 307.394 15.9304 303.001 15.8457L1.99963 10.0386C0.889079 10.0172 0 9.11076 0 8Z'
      fill={fill}
    />
  )
}
