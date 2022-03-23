import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import RangePathIcon from './range-path'

const RangeInputLabel = styled('span')`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`

const RangeInputValuesWrapper = styled('div').attrs((): {
  className: string
} => ({
  className: 'absolute w-full flex justify-between z-10',
}))``

const RangeInputValue = styled('span')`
  margin-top: 4px;
`

const RangeInputBackdrop = styled('rect')`
  fill: ${({ fill }) => fill};
`

interface RangeInputSliderProps {
  thumbBorderWidth: number
  height: number
}

const RangeInputSlider = styled('input').attrs((): { className: string } => ({
  className:
    'absolute top-0 w-full bg-transparent outline-none cursor-pointer z-20',
}))<RangeInputSliderProps>`
  -webkit-appearance: none;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-shadow: ${({ height, thumbBorderWidth }) =>
      `0px ${thumbBorderWidth * 2}px ${height}px -${
        thumbBorderWidth * 2
      }px rgba(15, 15, 15, 0.2)`};
    border-radius: ${({ height, thumbBorderWidth }) =>
      height + thumbBorderWidth * 2}px;
    border: ${({ thumbBorderWidth }) => thumbBorderWidth}px solid #000;
    // border: ${({ thumbBorderWidth }) => thumbBorderWidth}px solid #fcfcfd;
    height: ${({ height, thumbBorderWidth }) =>
      height + thumbBorderWidth * 2}px;
    width: ${({ height, thumbBorderWidth }) => height + thumbBorderWidth * 2}px;
    background: #3f9af7;
    opacity: 0.2;
    margin-top: ${({ thumbBorderWidth }) => `-${thumbBorderWidth}px`};
  }
`

interface RangeInputProps {
  label?: string
  min?: number
  max?: number
  step?: number
  ratio?: number
}

export default function RangeInput({
  label = '',
  min = 0,
  max = 10,
  step = 1,
  ratio = 1,
}: RangeInputProps): ReactElement | null {
  const [viewBoxWidth] = useState<number>(311)
  const [viewBoxHeight] = useState<number>(16)
  const [sliderValue, setSlideValue] = useState<number>(0)
  const [clipPathWidth, setWidth] = useState<number>()

  const expChange = (e?: any) => {
    const { value, min, max } = e.target

    setSlideValue(value)
    setWidth((value - min) * (viewBoxWidth / (max - min)))
  }

  return (
    <>
      <RangeInputLabel>{label}</RangeInputLabel>
      <div className='relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          height={viewBoxHeight * ratio}
        >
          <defs>
            <clipPath id='backdrop'>
              <RangePathIcon />
            </clipPath>
          </defs>
          <RangePathIcon />
          <RangeInputBackdrop
            width={clipPathWidth}
            height={viewBoxHeight}
            clipPath='url(#backdrop)'
            fill='#3F9AF7'
          />
        </svg>
        <RangeInputSlider
          type='range'
          min={min}
          max={max}
          value={sliderValue}
          step={step}
          onInput={expChange}
          onChange={expChange}
          height={viewBoxHeight * ratio}
          thumbBorderWidth={(viewBoxHeight * ratio) / 4}
        />
        <RangeInputValuesWrapper>
          <RangeInputValue>{min}</RangeInputValue>
          <RangeInputValue>{max}</RangeInputValue>
        </RangeInputValuesWrapper>
      </div>
    </>
  )
}
