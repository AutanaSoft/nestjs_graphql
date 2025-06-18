import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

/**
 * GraphQL configuration factory
 * Creates GraphQL configuration based on environment variables
 */
export const graphqlConfig = (
  configService: ConfigService,
): ApolloDriverConfig => {
  const isDevelopment = configService.get('NODE_ENV') === 'development';

  return {
    // Auto-generate schema file
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,

    // Playground and introspection for development
    playground: configService.get<boolean>('GRAPHQL_PLAYGROUND') ?? isDevelopment,
    introspection:
      configService.get<boolean>('GRAPHQL_INTROSPECTION') ?? isDevelopment,

    // Debug mode for development
    debug: isDevelopment,

    // GraphQL path
    path: configService.get<string>('GRAPHQL_PATH') ?? '/graphql',
  };
};

/**
 * Export default configuration for direct use
 */
export default graphqlConfig; 