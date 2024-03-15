import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import mongoose from "mongoose";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/createProfile.dto";
// import { AuthGuard } from '@nestjs/passport';
// import { Profile } from 'src/schemas/profile.scheme';

@Controller('profile')
export class ProfileController {

    constructor(private profileService: ProfileService) { }
    
    @Post()
  //  @UseGuards(AuthGuard())
   // async 
    createProfile(@Body() createProfileDto: CreateProfileDto){
        //,@Req() req):Promise<Profile> {
        console.log(createProfileDto);
        return this.profileService.createProfile(createProfileDto);
        //,req.user);
    }


}