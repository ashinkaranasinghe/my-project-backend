import { AuthResponseDto } from './dto/authRespones.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const authResponse = new AuthResponseDto();
    const user = await this.userRepository.findOne({
      email: loginDto.email,
    });
    if (!user) {
      authResponse.error = true;
      authResponse.message = 'Invalid Email/Password';
      return authResponse;
    }

    const passwordIsMatch = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!passwordIsMatch) {
      authResponse.error = true;
      authResponse.message = 'Invalid Email/Password';
      return authResponse;
    }

    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    authResponse.error = false;
    authResponse.token = this.jwtService.sign(payload);
    return authResponse;
  }
}
