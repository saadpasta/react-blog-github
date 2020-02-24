import React from 'react'
import styled from 'styled-components'

import loader from '../../Assets/Img/loader.svg'

const LoaderContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 128px;
  }
`

export const Loader = () => (
  <LoaderContainer>
    <img src={loader} alt="Loading..." />
  </LoaderContainer>
)