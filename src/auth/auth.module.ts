import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './jwt.strategy';
import { UserSchema } from 'src/schemas/user.scheme';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
     JwtModule.register({
      secret: "priyakumaresan", // Provide your secret key here
      signOptions: { expiresIn: '1h' }, // You can adjust token expiration as needed
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
