import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * Database configuration factory
 * Creates TypeORM configuration based on environment variables
 */
export const databaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const isProduction = configService.get('NODE_ENV') === 'production';
  const isDevelopment = configService.get('NODE_ENV') === 'development';

  return {
    type: 'postgres',
    host: configService.get<string>('DATABASE_HOST', 'postgres'),
    port: configService.get<number>('DATABASE_PORT', 5432),
    username: configService.get<string>('DATABASE_USERNAME', 'postgres'),
    password: configService.get<string>('DATABASE_PASSWORD', 'postgres'),
    database: configService.get<string>('DATABASE_NAME', 'nestjs_graphql'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    synchronize: isDevelopment, // Only sync in development
    extra: {
      connectionLimit: isProduction ? 20 : 5,
      acquireTimeout: 30000,
      timeout: 30000,
    },
  };
};

/**
 * Export default configuration for direct use
 */
export default databaseConfig;
