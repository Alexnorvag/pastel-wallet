import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import ArrowDown from '../assets/icons/chevron-down'
import ArrowUp from '../assets/icons/chevron-up'
import { colors } from '../../common/theme/colors'

const DropDownContainer = styled('div').attrs((): { className: string } => ({
  className: 'cursor-pointer',
}))`
  min-width: 113px;
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: ${colors.text.gray600};
`

const DropDownHeader = styled('div').attrs((): { className: string } => ({
  className: 'bg-white',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 14px;

  box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08),
    0px 0px 1px rgba(50, 50, 71, 0.2);
  border-radius: 4px;

  &:hover {
    color: #353941;
    background: #f7f8f9;

    svg {
      stroke: #353941;
    }
  }
`
const DropDownHeaderLabel = styled('div')`
  padding-right: 8px;
`

interface DropDownHeaderTitleProps {
  withLabel: boolean
}
const DropDownHeaderTitle = styled('div')<DropDownHeaderTitleProps>`
  color: ${({ withLabel }) => (withLabel ? colors.text.gray800 : 'inherit')};
`

interface DropDownListContainerProps {
  width: number | undefined
}

const DropDownListContainer = styled('div').attrs((): {
  className: string
} => ({
  className: 'bg-white overflow-hidden',
}))<DropDownListContainerProps>`
  position: absolute;
  min-width: 113px;
  z-index: 100;

  border: 0.6px solid #e6e8ec;
  box-shadow: 0px 0px 1px rgba(10, 22, 70, 0.06),
    0px 16px 16px rgba(10, 22, 70, 0.1);
  border-radius: 6px;

  width: ${({ width }) => (width ? `${width}px` : 'auto')};
`

const DropDownList = styled('ul')`
  margin: 2px 0;
`

interface ListItemProps {
  active: boolean
}

const ListItem = styled('li')<ListItemProps>`
  display: flex;
  align-items: center;
  padding: 0 8px;
  list-style: none;
  height: 40px;
  color: ${({ active }) => (active ? colors.background.onboarding : '#353941')};
  background: ${({ active }) => (active ? colors.tab.active : 'inherit')};

  &:hover {
    color: ${({ active }) =>
      active ? colors.background.onboarding : '#353941'};
    background: ${({ active }) => (active ? colors.tab.active : '#f7f8f9')};
    mix-blend-mode: multiply;
  }
`
export interface DropdownProps {
  options: string[]
  selectedOption: string
  onOptionSelect: (option: string) => void
  label?: string
}

export default function Dropdown({
  options,
  selectedOption = 'Select...',
  onOptionSelect,
  label,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number | undefined>()
  const parentRef = useRef<HTMLDivElement>(null)

  const toggling = () => {
    setIsOpen(isOpen => !isOpen)

    setContainerWidth(parentRef.current?.offsetWidth)
  }

  const onOptionClicked = (value: string) => {
    setIsOpen(false)
    onOptionSelect(value)
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling} ref={parentRef}>
        {label && <DropDownHeaderLabel>{label}:</DropDownHeaderLabel>}
        <DropDownHeaderTitle withLabel={!!label}>
          {selectedOption}
        </DropDownHeaderTitle>
        {isOpen ? (
          <ArrowUp width={16} height={16} stroke='#B0B7C3' />
        ) : (
          <ArrowDown width={16} height={16} stroke='#B0B7C3' />
        )}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer width={containerWidth}>
          <DropDownList>
            {options.map((option, key) => (
              <ListItem
                key={key}
                active={option === selectedOption}
                onClick={() => onOptionClicked(option)}
              >
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
