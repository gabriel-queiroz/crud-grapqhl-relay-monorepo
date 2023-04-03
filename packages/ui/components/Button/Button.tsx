import { Button as ButtonStyled } from './Button.styles'
import React, { FC } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
)
