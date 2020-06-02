import styled from 'styled-components'

export const CardContainer = styled.div`
  cursor: pointer;
  margin-bottom: 6rem;
  border-radius: 10px;
  padding: 10px;
  transition: 0.2s;
  position: relative;

  :hover {
    background-color: ${props => props.theme.mode === 'light' ? '#F5F5F5' : '#3B4252'};
  }
`