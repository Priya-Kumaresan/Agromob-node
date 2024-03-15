import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';

import { ProfileController } from './profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from 'src/schemas/profile.scheme';

@Module({
  providers: [ProfileService],
  imports:[
    MongooseModule.forFeature([
      {
        name:Profile.name,
        schema:ProfileSchema
      }
    ])
  ],
  controllers: [ProfileController]


})
export class ProfileModule {}







