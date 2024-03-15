import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { CropsController } from './crops/crops.controller';
import { CropsModule } from './crops/crops.module';

@Module({

  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1/agromob"),
    ProfileModule,
    AuthModule,
    CropsModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
