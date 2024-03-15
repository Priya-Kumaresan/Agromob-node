import {IsNotEmpty,IsInt, IsString} from "class-validator"
import { isFloat64Array } from "util/types";

export class SignUpDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsString()
    role:string;
}