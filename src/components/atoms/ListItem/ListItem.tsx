import React from 'react'

import StyeledListItem from './StyledListItem'

type ListItemProps = {
  label: string
  color?: string
}

const ListItem = ({
  label = 'label here',
  color = '#141422',
}: ListItemProps) => {
  return <StyeledListItem color={color}> {label} </StyeledListItem>
}
export default ListItem
