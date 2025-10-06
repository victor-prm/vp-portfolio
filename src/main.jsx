import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
  cache: new InMemoryCache(),
});

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </StrictMode>,
)