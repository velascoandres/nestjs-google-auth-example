import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google-auth/signin-with-idToken')
  googleAuth(@Body('idToken') idToken: string) {
    return this.authService.singInWithIdToken(idToken);
  }
}
