import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';

import Screens from './screens';
import getEnvVars from '../config';
const { API_URI } = getEnvVars();
const uri = API_URI;

const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri: 'http://192.168.1.36:4000/api' });
// return the headers to the context
const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync('token');

  return {
    headers: {
      ...headers,
      authorization: token || ''
    }
  };
});
// Create a instance of Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};
export default Main;