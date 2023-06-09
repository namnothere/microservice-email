import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Subscriber from './subscriber.enity';
import { createSubscriberDto } from './createSubscriber.dto';
import { Repository } from 'typeorm';

interface SubscribersResponse {
    data: Subscriber[];
}

@Injectable()
export class SubscribersService {
    constructor(
        @InjectRepository(Subscriber)
        private subscriberRepository: Repository<Subscriber>,
    ) {}
    
    // public async AddSubscriber(subscriber: createSubscriberDto): Promise<Subscriber> {
    public async AddSubscriber(subscriber: createSubscriberDto): Promise<any> {
        console.log("Call AddSubscriber in server");
        try {
            const newSubscriber = await this.subscriberRepository.create(subscriber);
            await this.subscriberRepository.save(newSubscriber);
            console.log(newSubscriber);
            return newSubscriber as Subscriber;
        } catch (err) {
            let data = JSON.parse(JSON.stringify(err));
            console.log(data.detail);
            return { err: data.detail };
        }
    }

    public async GetAllSubscribers() {
        const result = await this.subscriberRepository.find();
        
        if (result.length != 0) {
            console.log(result);
            return {
                data: result
            } as SubscribersResponse;
        } else {
            return {};
        }
    }

}
