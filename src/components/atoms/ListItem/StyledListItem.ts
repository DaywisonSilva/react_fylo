import styled from 'styled-components'

type StyledListItemProps = {
  color?: string
}

const StyledListItem = styled.li<StyledListItemProps>`
  color: ${(props) => props.color};
  font-size: 1.5rem;
  font-weigth: 400;
  list-style: none;
`

export default StyledListItem
