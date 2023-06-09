import { Controller, Inject } from '@nestjs/common';
import { EventPattern, GrpcMethod } from '@nestjs/microservices';
import { createSubscriberDto } from './createSubscriber.dto';
import { SubscribersService } from './subscribers.service';

@Controller()
export class SubscribersController {
    constructor(
        private readonly subscribersService: SubscribersService,
    ) {}

    @GrpcMethod('Subscribers', 'AddSubscriber')
    AddSubscriber(subscriber: createSubscriberDto) {
        return this.subscribersService.AddSubscriber(subscriber);
    }

    
    @GrpcMethod('Subscribers', 'GetAllSubscribers')
    GetAllSubscribers() {
        return this.subscribersService.GetAllSubscribers();
    }
}
