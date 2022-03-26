import { Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';

@Injectable()
export class AuthService {
  signUp(signupDto: SignupDto) {
    console.log(signupDto);

    return 'Hello world';
  }

  login(loginDto: LoginDto) {
    return 'In login';
  }
}
