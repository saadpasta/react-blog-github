import styled from 'styled-components'

export const PostDateLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  transition-duration: 0.15s, 0.15s, 0.15s;
  transition-timing-function: ease-in, ease-in, ease-in;
  transition-delay: 0s, 0s, 0s;
  color: ${ props => props.theme.toggleBorder };
  
  :hover {
    color: ${ props => props.theme.text };
  }
`