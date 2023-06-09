import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'subscribers',
  //     url: configService.get('GRPC_CONNECTION_URL'),
  //     protoPath: join(__dirname, '../subscribers.proto'),
  //   }
  // })
  // // await app.listen(3000);
  // await app.startAllMicroservices();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'subscribers',
      protoPath: join(__dirname, '../subscribers.proto'),
    },
  });

  await app.listen()
  .then(() => {
    console.log('Microservice is listening...');
  });

}
bootstrap();
