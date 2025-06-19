# Configuration Documentation

This directory contains all the configuration files for the NestJS application.

## Available Configurations

### Database Configuration (`database.config.ts`)
- **File**: `src/config/database.config.ts`
- **Module**: `src/database/database.module.ts`
- **Purpose**: TypeORM PostgreSQL database configuration

#### Environment Variables:
```bash
DATABASE_HOST=postgres          # Database host
DATABASE_PORT=5432             # Database port
DATABASE_USERNAME=postgres     # Database username
DATABASE_PASSWORD=postgres     # Database password
DATABASE_NAME=nestjs_graphql   # Database name
```

### GraphQL Configuration (`graphql.config.ts`)
- **File**: `src/config/graphql.config.ts`
- **Module**: `src/graphql/graphql.module.ts`
- **Purpose**: Apollo GraphQL server configuration

#### Features:
- **Development Landing Page**: Uses `ApolloServerPluginLandingPageLocalDefault` for a better development experience
- **Auto Schema Generation**: Automatically generates `schema.gql` file
- **Environment-Based Configuration**: Different settings for development and production

#### Environment Variables:
```bash
GRAPHQL_PLAYGROUND=true        # Enable GraphQL Playground
GRAPHQL_INTROSPECTION=true     # Enable schema introspection
GRAPHQL_PATH=/graphql          # GraphQL endpoint path
```

#### Development Features:
- Enhanced landing page with embedded GraphQL Playground
- Query debugging and introspection enabled
- Detailed error messages and stack traces

#### Production Features:
- Optimized landing page
- Introspection disabled for security
- Minimal error exposure

### General Environment Variables:
```bash
NODE_ENV=development           # Application environment (development/production)
PORT=3000                     # Application port
```

## Usage

All configurations are automatically loaded when the application starts. The configurations adapt based on the `NODE_ENV` environment variable:

- **Development**: More verbose logging, enhanced playground, landing page plugins, etc.
- **Production**: Optimized for performance and security

## Apollo Server Plugins

In development mode, the following plugins are automatically enabled:

- **ApolloServerPluginLandingPageLocalDefault**: Provides an enhanced local development landing page with embedded GraphQL Playground

## File Structure

```
src/config/
├── index.ts              # Central export file
├── database.config.ts    # Database configuration
├── graphql.config.ts     # GraphQL configuration
└── README.md            # This documentation
``` 