import { ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8888/vp-portfolio-cms/graphql' }),
  cache: new InMemoryCache(), // this is where caching happens
})

export default client