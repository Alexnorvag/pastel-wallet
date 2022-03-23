import React, { ButtonHTMLAttributes } from 'react'

// import classnames from 'classnames'
// interface ButtonProps {
//   size: string
//   bgColor: string
//   textColor: string
//   children: ReactElement | string
// }

// export default function Button({
//   size,
//   bgColor,
//   textColor,
//   children,
// }: ButtonProps) {
//   return (
//     <button
//       className={classnames(
//         `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`,
//         {
//           'text-xs': size === 'sm',
//           'text-xl': size === 'lg',
//         },
//       )}
//     >
//       {children}
//     </button>
//   )
// }

import classnames from 'classnames'
import styled from 'styled-components'
import { colors } from '../../common/theme/colors'

// Tailwind classes
const StyledButton = styled.button.attrs(
  ({ variant }: { variant: ButtonVariants; color: ButtonColors }) => ({
    // className: classnames(
    //   `px-8 py-2 font-semibold`,
    //   {
    //     'text-white': variant === 'default',
    //   },
    //   `transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
    // ),
    className: classnames(
      ``,
      {
        'bg-transparent': variant === 'transparent',
      },
      `bg-white transition duration-500`,
    ),
  }),
)<{ variant: ButtonVariants; color: ButtonColors }>`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  padding: 6px 12px;
  border-radius: 12px;
  &:hover {
    background-color: ${({ color }) =>
      color === 'light' ? colors.tab.hover : colors.button.hover};
    color: ${({ variant }) => variant === 'transparent' && colors.text.gray600};
  }
  &:focus {
    background-color: ${({ color }) =>
      color === 'light' ? colors.tab.active : colors.button.pressed};
    color: ${({ color }) => color === 'light' ? colors.background.onboarding : colors.button.text};
    outline: 0;
  }
`
// &:hover {
//   background-color: ${({ theme }) => theme.colors.blueHover};
//   border-color: ${({ theme }) => theme.colors.blueHover};
//   color: ${({ variant, theme }) =>
//     variant === 'transparent' && theme.colors.whiteOff};
// }

// Custom classes
// const StyledButton = styled.button.attrs(() => ({
//   className: `px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
// }))<{ variant: ButtonVariants }>`
//   color: ${({ variant }) => (variant === 'warning' ? 'red' : '')};
// `

type ButtonVariants = 'default' | 'transparent'
type ButtonColors = 'default' | 'dark' | 'light'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: ButtonVariants
  color?: ButtonColors
}

export default function Button({
  text,
  variant = 'default',
  color = 'default',
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
      {text}
    </StyledButton>
  )
}
