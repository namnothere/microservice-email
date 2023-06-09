import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './subscriber.enity';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { SubscriberRepository } from './subscriber.repository';
@Module({
    imports: [TypeOrmModule.forFeature([Subscriber])],
    controllers: [SubscribersController],
    providers: [SubscribersService, SubscriberRepository],
})
export class SubscribersModule {}
