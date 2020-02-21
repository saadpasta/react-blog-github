import styled from 'styled-components'

import { config } from '../../config'
const { backgroundColor } = config.header

export const HeaderContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 5em;
  text-align: center;
  background-color: ${backgroundColor};

  @media only screen and (max-width: 768px) {
    padding: 3em;
  }
`