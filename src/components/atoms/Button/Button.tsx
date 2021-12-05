import React from 'react'
import StyledButton from './StyledButton'

type ButtonProps = {
  bg?: string
  label: string
}

const Button = ({ bg = '#3065f8', label = 'Button' }: ButtonProps) => {
  return <StyledButton bg={bg}>{label}</StyledButton>
}

export default Button
