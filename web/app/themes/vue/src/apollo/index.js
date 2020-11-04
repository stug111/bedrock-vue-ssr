import Vue from 'vue'
import VueApollo from 'vue-apollo'
import fetch from 'cross-fetch';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://vuenew.local/wp/graphql',
  fetch
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})