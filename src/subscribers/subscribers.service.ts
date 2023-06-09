import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Subscriber from './subscriber.enity';
import { createSubscriberDto } from './createSubscriber.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SubscribersService {
    constructor(
        @InjectRepository(Subscriber)
        private subscriberRepository: Repository<Subscriber>,
    ) {}
    
    // @GrpcMethod('Subscribers', 'AddSubscriber')
    public async AddSubscriber(subscriber: createSubscriberDto): Promise<Subscriber> {
        console.log("Call Subscribers in server");
        try {
            const newSubscriber = await this.subscriberRepository.create(subscriber);
            await this.subscriberRepository.save(newSubscriber);
            return newSubscriber;
        } catch (err) {
            return err;
        }
    }

    // @GrpcMethod('Subscribers', 'GetAllSubscribers')
    public async GetAllSubscribers() {
        console.log("Call Subscribers in server");
        const result = await this.subscriberRepository.find();
        console.log(result);
        return {
            subscribers: [
                ...result
            ]
        };
        // return {};
    }

}
