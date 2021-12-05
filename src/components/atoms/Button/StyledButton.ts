import styled from 'styled-components'

type StyledButtonProps = {
  bg?: string
  disabled?: Boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.bg};
  border-radius: 8px;
  height: 40px;
  border: none;
  box-shadow: 2px 2px 4px #ccc;
  color: white;
`

export default StyledButton
