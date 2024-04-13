import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/user.dto';
import * as uuid from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: User = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const result = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser: User = {
      id: new uuid.v4(),
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      is_kyc_verified: false,
      role: 'user',
      date_of_birth: new Date(user.dob),
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return await this.userService.create(newUser);
  }
}
