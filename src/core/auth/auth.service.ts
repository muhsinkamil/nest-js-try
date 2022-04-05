import { Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  signUp(signupDto: SignupDto) {
    return 'signup';
  }

  login(loginDto: LoginDto) {
    return 'In login';
  }
}
