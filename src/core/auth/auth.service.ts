import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(signupDto: SignupDto) {
    try {
      const hashedPassword = await bcrypt.hash(signupDto.password, 10);
      const user = { ...signupDto, password: hashedPassword };
      const savedUser = await this.prisma.user.create({
        data: {
          email: user.email,
          password: hashedPassword,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });

      delete savedUser.password;

      return savedUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials already exists');
        }
      }
      throw new InternalServerErrorException(error);
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const savedUser = await this.prisma.user.findUnique({
        where: {
          email: loginDto.email,
        },
      });

      if (!savedUser) {
        throw new ForbiddenException('Credentials mismatch');
      }

      const isPasswordMatch = await bcrypt.compare(
        loginDto.password,
        savedUser.password,
      );

      if (!isPasswordMatch) {
        throw new ForbiddenException('Credentials mismatch');
      }

      delete savedUser.password;

      return savedUser;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
