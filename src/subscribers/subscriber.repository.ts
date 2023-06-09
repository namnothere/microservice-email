import { Injectable } from '@nestjs/common';
import Subscriber from './subscriber.enity';
import { Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class SubscriberRepository {
    constructor(
        @InjectEntityManager()
        private readonly subscriberRepository: Repository<Subscriber>,
    ) {}

    async AddSubscriber(subscriber: Subscriber) {
        return await this.subscriberRepository.save(subscriber);
    }

    async GetAllSubscribers() {
        return await this.subscriberRepository.find();
    }
}