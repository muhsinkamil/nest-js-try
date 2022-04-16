import { Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(signupDto: SignupDto) {
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);
    const user = { ...signupDto, password: hashedPassword };
    const savedUser = this.prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });

    return savedUser;
  }

  login(loginDto: LoginDto) {
    // const savedUser = this.prisma.user.findUnique({
    //   where: {
    //     email: loginDto.email,
    //   },
    // });
    // bcrypt.compare(savedUser, loginDto.password);
    return 'login';
  }
}
