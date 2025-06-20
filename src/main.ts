import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(appConfig.port);
  console.log(`📝 Environment: ${appConfig.environment}`);
  console.log(`🚀 Application is running on: http://localhost:${appConfig.port}/graphql`);
}

// initialize the app
void bootstrap();
