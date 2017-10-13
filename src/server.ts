import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = NestFactory.create(ApplicationModule);
  await app.listen(3000);
}

bootstrap();
