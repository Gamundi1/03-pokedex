import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
      transformOptions: {
        exposeUnsetFields: false,
      },
    }),
  );

  const port = process.env.PORT;

  await app.listen(port!);

  console.info(`app running on port ${port}`);
}
bootstrap();
