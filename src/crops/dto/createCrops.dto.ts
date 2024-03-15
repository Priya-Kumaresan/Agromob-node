import {IsNotEmpty,IsInt, IsString} from "class-validator"
import { isFloat64Array } from "util/types";

export class CreateCropsDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    quantity:string;

    @IsNotEmpty()
    @IsString()
    pricePerkg:string;

    
    @IsNotEmpty()
    @IsString()
    cropType:string;

}