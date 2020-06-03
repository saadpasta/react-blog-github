import React from 'react'
import styled from 'styled-components'

const StyledCategory = styled.div`
  display: inline-block;
  background: #009bbb;
  border-radius: 3px;
  padding: 3px 15px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${ props => props.theme.body };
  font-weight: 300;
  line-height: 28px;
  font-family: "Quicksand";
  margin-right: 10px;
`

export const CardCategory = ({ value }) => (
  <StyledCategory
    key={value.id}
    style={{ backgroundColor: `#${value.color}` }}>
    {value.name}
  </StyledCategory>
)