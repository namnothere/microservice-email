import { Injectable } from '@nestjs/common';
import Kettle from './kettle.enity';
import { Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class KettleRepository {
    constructor(
        @InjectEntityManager()
        private readonly kettleRepository: Repository<Kettle>,
    ) {}

    async addKettle(subscriber: Kettle) {
        return await this.kettleRepository.save(subscriber);
    }

    async GetAllKettles() {
        return await this.kettleRepository.find();
    }
}