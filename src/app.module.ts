import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig, databaseConfig, graphqlConfig } from './config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, graphqlConfig],
      envFilePath: ['.env', '.env.local'],
      cache: true,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService): ApolloDriverConfig => {
        return configService.get<ApolloDriverConfig>('graphQLConfig')!;
      },
      inject: [ConfigService],
    }),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
