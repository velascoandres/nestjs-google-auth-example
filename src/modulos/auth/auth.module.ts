import { Module } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { AuthController } from './auth.controller';
import { GoogleAuthService } from './google.auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: 'OAUTH2',
      useValue: new OAuth2Client('<TODO: YOUR CLIENT ID>'),
    },
    GoogleAuthService,
  ],
})
export class AuthModule {}
