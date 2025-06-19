import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  // get the app config
  const configService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>('app')!;

  // set global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(appConfig.port, appConfig.host);
  console.log(`📝 Environment: ${appConfig.environment}`);
  console.log(`🚀 Application is running on: http://localhost:${appConfig.port}/graphql`);
}

// initialize the app
void bootstrap();
