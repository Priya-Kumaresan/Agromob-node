import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from "mongoose";
import { Profile } from 'src/schemas/profile.scheme';
// import { User } from 'src/schemas/user.scheme';
import {CreateProfileDto } from './dto/createProfile.dto';

@Injectable()
export class ProfileService {
    constructor(
        @InjectModel(Profile.name) 
        private profileModel: mongoose.Model<Profile>,
    ) { }

    //async 
   // createProfile(profile: Profile, user: User): Promise<Profile> {
    createProfile(createProfileDto:CreateProfileDto){
        // const newProfile = Object.assign(profile, { user: user._id });
        // const res = await this.profileModel.create(newProfile);
        // return res;
        const newProfile=new this.profileModel(createProfileDto);
        return newProfile.save();
    }    
}
