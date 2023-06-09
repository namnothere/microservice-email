import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: [
        'subscribers',
        'kettles',
      ],
      protoPath: [
        join(__dirname, '../subscribers.proto'),
        join(__dirname, '../kettles.proto'),
      ],
    },
  });

  await app.listen()
  .then(() => {
    console.log('Microservice is listening...');
  });

}
bootstrap();
