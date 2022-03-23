import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

import { colors } from '../../common/theme/colors'

interface StyledTabButtonProps {
  variant: TabButtonVariants
  active: boolean
}

const StyledTabButton = styled.button.attrs((): { className: string } => ({
  className: `focus:outline-none transition duration-500`,
}))<StyledTabButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;

  background: ${({ active }) => (active ? colors.tab.active : '#fff')};
  color: ${({ active }) =>
    active ? colors.background.onboarding : colors.text.gray600};

  border-radius: 100px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  &:hover {
    background: ${colors.tab.hover};
    color: ${colors.text.gray900};
  }
  &:focus {
    background: ${colors.tab.active};
    color: ${colors.background.onboarding};
  }
`

type TabButtonVariants = 'default' | 'marked'
export interface TabButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: TabButtonVariants
  active?: boolean
}

export default function TabButton({
  text,
  variant = 'default',
  active = false,
  ...rest
}: TabButtonProps) {
  return (
    <StyledTabButton variant={variant} active={active} {...rest}>
      {text}
    </StyledTabButton>
  )
}
