import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import { Helmet } from "react-helmet";

import { config } from './config'
import { client } from './Utils/apollo';
import Router from './Router';
import GithubCallback from './Containers/GithubCallback';

const Application = () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('code')) {
    return <GithubCallback />
  }

  return (
    <>
      <Helmet>
          <title>{config.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content={config.subtitle} />
          <meta name="theme-color" content={config.header.backgroundColor} />
      </Helmet>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </>
  )
};

export default Application;