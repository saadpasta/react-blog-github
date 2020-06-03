import styled from 'styled-components'

import { config } from '../../config'
const { backgroundColor, backgroundColorDark } = config.header;

export const HeaderContainer = styled.div`
  position: relative;
  padding: 5em;
  text-align: center;
  background: ${(props) => props.theme.mode === "light" ? backgroundColor : backgroundColorDark};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    padding: 3em;
  }
`