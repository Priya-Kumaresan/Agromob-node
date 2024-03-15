import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Crops } from 'src/schemas/crops.scheme';
import { CreateCropsDto } from './dto/createCrops.dto';

@Injectable()
export class CropsService {
    constructor(@InjectModel(Crops.name) private cropsModel: Model<Crops>) { }

    createCrops(createCropsDto: CreateCropsDto) {
        const newCrops = new this.cropsModel(createCropsDto);
        return newCrops.save();
    }

 

}