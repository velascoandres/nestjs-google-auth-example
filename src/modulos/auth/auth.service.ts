import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  CLIENT_ID ='<TODO: YOUR CLIENT-ID>';

  client = new OAuth2Client(this.CLIENT_ID);

  async singInWithIdToken(idToken: string) {
  
    const user = await this.validateGoogleIdToken(idToken);
    
    return {
      token: user,
    };
  
  }

  async validateGoogleIdToken(idToken: string) {
    const ticket = await this.client.verifyIdToken({
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
