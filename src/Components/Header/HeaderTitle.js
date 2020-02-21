import styled from 'styled-components'

import { config } from '../../config'
const { titleColor } = config.header

export const HeaderTitle = styled.h1`
  font-weight: 700;
  line-height: 1.15;
  margin: 1.25rem 0;
  font-size: 4.5em;
  text-align: center;
  color: ${titleColor};

  @media only screen and (max-width: 768px) {
    font-size: 3em;
  }
`