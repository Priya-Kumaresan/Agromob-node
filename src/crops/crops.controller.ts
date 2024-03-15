import { Body, Controller, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import mongoose from "mongoose";
import { CropsService } from "./crops.service";
import { CreateCropsDto } from "./dto/createCrops.dto";

@Controller('crops')
export class CropsController {
    constructor(private cropsService: CropsService) { }

    @Post()
    createCrops(@Body() createCropsDto: CreateCropsDto) {
        console.log(createCropsDto);
        return this.cropsService.createCrops(createCropsDto);
    }

    
}