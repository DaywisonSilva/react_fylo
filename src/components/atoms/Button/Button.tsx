import React from 'react'
import StyledButton from './StyledButton'

type ButtonProps = {
  bg?: string
  label: string
  disabled?: boolean
}

const Button = ({
  bg = '#3065f8',
  label = 'Button',
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton bg={bg} disabled={disabled}>
      {label}
    </StyledButton>
  )
}

export default Button
