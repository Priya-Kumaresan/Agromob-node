import {IsNotEmpty, IsString, IsNumber, IsEmpty} from "class-validator"
//import { User } from "src/schemas/user.scheme";

export class CreateProfileDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    phoneNumber:string;

    @IsNotEmpty()
    @IsString()
    aadharNumber:string;

    @IsNotEmpty()
    @IsString()
    selectedLocation:string;

    @IsNotEmpty()
    @IsString()
    selectedHarvestType:string;

    @IsNotEmpty()
    @IsNumber()
    randomNumber:number;
    
  // @IsEmpty({ message: 'You cannot pass user id' })
  // readonly user: User;
}



