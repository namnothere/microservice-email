import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Kettle from './kettle.enity';
import { createKettleDto } from './createKettle.dto';
import { Repository } from 'typeorm';

interface KettlesResponse {
    allCount: number;
    kettles: Kettle[];
}

@Injectable()
export class KettlesService {
    constructor(
        @InjectRepository(Kettle)
        private subscriberRepository: Repository<Kettle>,
    ) {}
    
    // public async AddSubscriber(subscriber: createSubscriberDto): Promise<Subscriber> {
    public async addKettle(subscriber: createKettleDto): Promise<any> {
        console.log("Call AddSubscriber in server");
        try {
            const newSubscriber = await this.subscriberRepository.create(subscriber);
            await this.subscriberRepository.save(newSubscriber);
            console.log(newSubscriber);
            return newSubscriber;
        } catch (err) {
            let data = JSON.parse(JSON.stringify(err));
            console.log(data.detail);
            return { err: data.detail };
        }
    }

    public async GetAllKettles() {
        const result = await this.subscriberRepository.find();
        
        if (result.length != 0) {
            let total = 0;
            result.forEach(element => {
                total += element.count;
            });
            console.log(result);
            return {
                allCount: total,
                kettles: result as Kettle[]
            } as KettlesResponse;

        } else {
            return {
                allCount: 0,
                kettles: []
            } as KettlesResponse; 
        }
    }

}
