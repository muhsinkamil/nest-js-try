import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
