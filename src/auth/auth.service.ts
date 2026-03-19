import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(body: RegisterDto) {
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await this.usersService.createUser({
      ...body,
      password: hashedPassword,
    });

    return user;
  }

  async login(body: LoginDto) {
    const user = await this.usersService.findUserByEmail(body.email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isValidPassword = await bcrypt.compare(body.password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      access_token: this.jwtService.sign({
        userId: user._id,
      }),
    };
  }
}
