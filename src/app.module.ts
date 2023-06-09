import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribersModule } from './subscribers/subscribers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'tiny.db.elephantsql.com',
      // port: 5432,
      username: 'gyodqdjd',
      password: 'EQJzKu9SlQ1C0E0m2NxsEWCWZ4gcN2vl',
      database: 'gyodqdjd',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SubscribersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
