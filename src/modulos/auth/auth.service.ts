import { Inject, Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  constructor(
    @Inject('OAUTH2')
    private readonly oAuth2Client: OAuth2Client,
  ){

  }

  async singInWithIdToken(idToken: string) {
  
    const user = await this.validateGoogleIdToken(idToken);
    
    return {
      token: user,
    };
  
  }

  async validateGoogleIdToken(idToken: string) {
    const ticket = await this.oAuth2Client.verifyIdToken({
      idToken: idToken,
      audience: [
          '<TODO: IF YOU HAVE MORE CLIENT IDS>'
      ],
    });
    const payload = ticket.getPayload();
    
    // TODO: save payload (user information) on a database

    return payload;
  }
}
