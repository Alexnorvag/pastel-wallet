import React from 'react'
import styled from 'styled-components'

interface StyledIcon {}

const StyledIcon = styled.svg.attrs((): { className: string } => ({
  className: 'hover:cursor-pointer',
}))<StyledIcon>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
`

interface ChevronDownProps {
  fill?: string
  stroke?: string
  width?: number
  height?: number
}

export default function ChevronDown({
  fill = 'transparent',
  stroke = 'currentColor',
  width = 24,
  height = 24,
}: ChevronDownProps) {
  return (
    <StyledIcon
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      viewBox={`0 0 24 24`}
      stroke={stroke}
      width={width}
      height={height}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
    </StyledIcon>
  )
}
