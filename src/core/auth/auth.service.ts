import { Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { PrismaService } from 'nestjs-prisma';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(signupDto: SignupDto) {
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);
    console.log({ hashedPassword });
    const user = { ...signupDto, password: hashedPassword };
    // return this.prisma.user.create(user);
    return 'signup';
  }

  login(loginDto: LoginDto) {
    return 'In login';
  }
}
