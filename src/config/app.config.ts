import { registerAs } from '@nestjs/config';

export interface AppConfig {
  port: number;
  host: string;
  environment: string;
}

export default registerAs(
  'app',
  (): AppConfig => ({
    port: parseInt(process.env.PORT || '3000', 10),
    host: process.env.HOST || '0.0.0.0',
    environment: process.env.NODE_ENV || 'development',
  }),
);
