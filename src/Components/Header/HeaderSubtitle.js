import styled from 'styled-components'

import { config } from '../../config'
const { subtitleColor } = config.header

export const HeaderSubtitle = styled.h1`
  font-weight: 400;
  color: ${subtitleColor};
  line-height: 1.15;
  margin: 1.25rem 0;
  font-size: 2.5em;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2em;
  }
`