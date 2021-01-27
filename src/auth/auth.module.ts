import { Module } from '@nestjs/common';
import { User } from '../users/users.entity';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';


@Module({
  imports:[UsersModule,
  JwtModule.register({
    secretOrPrivateKey: 'secret12356789'
})
],
  
  providers: [AuthService],
  
  controllers: [AuthController]
})
export class AuthModule {}
