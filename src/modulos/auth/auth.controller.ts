import { Body, Controller, Param, Post } from '@nestjs/common';
import { GoogleAuthService } from './google.auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: GoogleAuthService) {}

  @Post('google-auth/signin-with-idToken')
  googleAuth(@Body('idToken') idToken: string) {
    return this.authService.singInWithIdToken(idToken);
  }
}
