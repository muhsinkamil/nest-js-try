import { Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signUp(signupDto: SignupDto) {
    console.log({ signupDto });
    // return this.prisma.user.create(signupDto);
    return 'signup';
  }

  login(loginDto: LoginDto) {
    return 'In login';
  }
}
