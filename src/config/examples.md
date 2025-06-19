# Configuration Examples

This file contains examples of how to use and test the different configurations.

## Testing GraphQL Configuration

### 1. Start the application in development mode
```bash
# Using Docker Compose
docker-compose up --build

# Or locally
npm run start:dev
```

### 2. Access GraphQL endpoints
- **GraphQL Playground**: http://localhost:3000/graphql
- **Apollo Studio Landing Page**: Enhanced development interface with embedded playground

### 3. Example GraphQL Queries

#### Create a User
```graphql
mutation CreateUser {
  createUser(createUserInput: {
    name: "Juan Pérez"
    email: "juan@example.com"
    password: "123456"
  }) {
    id
    name
    email
    createdAt
    updatedAt
  }
}
```

#### Get All Users
```graphql
query GetUsers {
  users {
    id
    name
    email
    createdAt
    updatedAt
  }
}
```

## Environment Variable Examples

### Development Environment (.env)
```bash
NODE_ENV=development
PORT=3000

# Database
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=nestjs_graphql

# GraphQL
GRAPHQL_PLAYGROUND=true
GRAPHQL_INTROSPECTION=true
GRAPHQL_PATH=/graphql
```

### Production Environment
```bash
NODE_ENV=production
PORT=3000

# Database (use actual production values)
DATABASE_HOST=your-prod-db-host
DATABASE_PORT=5432
DATABASE_USERNAME=prod_user
DATABASE_PASSWORD=secure_password
DATABASE_NAME=prod_database

# GraphQL (security-focused)
GRAPHQL_PLAYGROUND=false
GRAPHQL_INTROSPECTION=false
GRAPHQL_PATH=/api/graphql
```

## Testing Apollo Server Plugin

The `ApolloServerPluginLandingPageLocalDefault` plugin provides:

1. **Enhanced Landing Page**: Better UI compared to default GraphQL Playground
2. **Embedded Playground**: Integrated query editor and documentation
3. **Development Tools**: Query history, variable management, etc.

### Features Available in Development:
- ✅ Enhanced GraphQL Playground interface
- ✅ Query autocompletion and validation
- ✅ Schema documentation sidebar
- ✅ Query history and favorites
- ✅ Variable and header management
- ✅ Response formatting and syntax highlighting

### Security in Production:
- ❌ Landing page disabled
- ❌ Introspection disabled
- ❌ Playground disabled
- ✅ Optimized for performance 