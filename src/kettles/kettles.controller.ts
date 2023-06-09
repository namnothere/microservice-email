import { Controller, Inject } from '@nestjs/common';
import { EventPattern, GrpcMethod } from '@nestjs/microservices';
import { createKettleDto } from './createKettle.dto';
import { KettlesService } from './kettles.service';

@Controller()
export class KettlesController {
    constructor(
        private readonly kettlesService: KettlesService,
    ) {}

    @GrpcMethod('Kettles', 'addKettle')
    addKettle(subscriber: createKettleDto) {
        return this.kettlesService.addKettle(subscriber);
    }

    
    @GrpcMethod('Kettles', 'GetAllKettles')
    GetAllKettles(): any {
        return this.kettlesService.GetAllKettles();
    }
}
