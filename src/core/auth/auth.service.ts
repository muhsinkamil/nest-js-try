import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto';

@Injectable()
export class AuthService {
  signUp(signupDto: SignupDto) {
    console.log(signupDto);

    return 'Hello world';
  }
}
