import {ApolloProvider} from '@apollo/client/react';
import client from "./lib/apollo-client.js";

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