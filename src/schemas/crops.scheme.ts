import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
//import { User } from "./user.scheme";
import mongoose from "mongoose";

@Schema({
  timestamps: true,
})
export class Crops{
    @Prop({unique:true,require:true})
    name:string;

    @Prop({require:true})
    quantity:string

    @Prop({require:true})
    pricePerkg:string

    @Prop({require:true})
    cropType:string

   
}

export const CropsSchema = SchemaFactory.createForClass(Crops);