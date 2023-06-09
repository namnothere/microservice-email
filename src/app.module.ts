import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribersModule } from './subscribers/subscribers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { KettlesModule } from './kettles/kettles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'tiny.db.elephantsql.com',
      username: 'gyodqdjd',
      password: 'EQJzKu9SlQ1C0E0m2NxsEWCWZ4gcN2vl',
      database: 'gyodqdjd',
      autoLoadEntities: true,
    }),
    SubscribersModule, KettlesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
