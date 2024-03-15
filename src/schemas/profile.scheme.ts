import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { User } from "./user.scheme";
import mongoose from "mongoose";

@Schema({
  timestamps: true,
})
export class Profile{
    @Prop({require:true})
    name:string;

    @Prop({require:true})
    phoneNumber:string

    @Prop({require:true})
    aadharNumber:string

    @Prop({require:true})
    selectedLocation:string

    @Prop({require:true})
    selectedHarvestType:string

    @Prop({require:true})
    randomNumber:number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);