
import { Module } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CropsController } from './crops.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Crops, CropsSchema } from 'src/schemas/crops.scheme';

@Module({
  providers: [CropsService],
  imports:[
    MongooseModule.forFeature([
      {
        name:Crops.name,
        schema:CropsSchema
      }
    ])
  ],
  controllers: [CropsController]
})
export class CropsModule {}
