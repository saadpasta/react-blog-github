import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { config } from '../../config'

const { enableOAuth, OAuthClientID } = config

const ButtonContainer = styled.div`
  display: ${enableOAuth ? 'block' : 'none'};
  position: ${({ absolute }) => absolute ? 'absolute' : 'initial'};
  top: 10px;
  right: 10px;
`
const Button = styled.button`
  -webkit-appearance: none;
  background: linear-gradient(180deg, rgb(136, 220, 109) 0%, rgb(92, 168, 65) 100%);
  color: #FFF;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;

  :hover {
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.10);
  }
`

const Text = styled.span`
  color: #FFF;
  font-size: 18px;
`

export const GithubLogin = ({ isAbsolute }) => {
  const isLoggedIn = localStorage.getItem('githubToken') || false

  const callOAuth = async () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=' + OAuthClientID;
  }

  return (
    <ButtonContainer absolute={isAbsolute}>
      {!isLoggedIn
       ? (
          <Button onClick={callOAuth}>
            <FontAwesomeIcon icon={faGithub} /> Log in
          </Button>
         )
       : <Text>Logged in as {localStorage.getItem('githubUsername')}</Text>
      }
    </ButtonContainer>
  )
}
