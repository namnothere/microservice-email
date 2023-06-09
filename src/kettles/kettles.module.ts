import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Kettle from './kettle.enity';
import { KettlesService } from './kettles.service';
import { KettlesController } from './kettles.controller';
import { KettleRepository } from './kettle.repository';
@Module({
    imports: [TypeOrmModule.forFeature([Kettle])],
    controllers: [KettlesController],
    providers: [KettlesService, KettleRepository],
})
export class KettlesModule {}
