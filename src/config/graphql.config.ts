import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs(
  'graphQLConfig',
  (): ApolloDriverConfig => ({
    path: process.env.GRAPHQL_PATH || '/graphql',
    sortSchema: Boolean(process.env.GRAPHQL_SORT_SCHEMA) || false,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    playground: Boolean(process.env.GRAPHQL_PLAYGROUND) || false,
    introspection: Boolean(process.env.GRAPHQL_INTROSPECTION) || false,
    debug: Boolean(process.env.NODE_ENV === 'development') || false,
    plugins: [
      process.env.NODE_ENV === 'development'
        ? ApolloServerPluginLandingPageLocalDefault({ footer: false, embed: true })
        : ApolloServerPluginLandingPageLocalDefault(),
    ],
    subscriptions: { 'graphql-ws': true },
  }),
);
