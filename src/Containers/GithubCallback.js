import React, { useEffect, useState } from 'react'

import { config } from '../config'
import { getAuthenticatedUser } from '../Utils/auth'
import { Loader } from '../Components/Common/Loader'

const { enableOAuth, OAuthClientID, OAuthSecret } = config

const GithubCallback = () => {
  const [loading, setLoading] = useState(true)

  const authenticate = async (code) => {
    // Apparently we need to use a proxy to make this request (CORS blocked for client-side only applications)
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: OAuthClientID,
        client_secret: OAuthSecret,
        code: code,
      }),
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
    })

    return response.json()
  }

  const setUsername = async () => {
    const { login } = await getAuthenticatedUser()
    localStorage.setItem('githubUsername', login)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    authenticate(urlParams.get('code'))
    .then((response) => {
      if (response) {
        localStorage.setItem('githubToken', response.access_token)
        setUsername().then(() => setLoading(false))
      }
    })
  }, [])

  if (!enableOAuth || !loading) {
    return window.location.replace(window.location.origin + window.location.pathname);
  }

  return <Loader />
}

export default GithubCallback
