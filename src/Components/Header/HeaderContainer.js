import styled from 'styled-components'

import { config } from '../../config'
const { backgroundColor } = config.header

export const HeaderContainer = styled.div`
  position: relative;
  padding: 5em;
  text-align: center;
  background: ${backgroundColor};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    padding: 3em;
  }
`