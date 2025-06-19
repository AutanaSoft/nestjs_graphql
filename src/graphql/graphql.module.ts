import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { graphqlConfig } from '../config/graphql.config';

/**
 * GraphQL Module
 * Encapsulates GraphQL configuration and setup
 */
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: graphqlConfig,
      inject: [ConfigService],
    }),
  ],
  exports: [GraphQLModule],
})
export class GraphqlModule {}
