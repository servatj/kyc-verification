import { Controller, Post, Get, Body, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') userId: number): Promise<User> {
    return this.userService.findById(userId);
  }

  @Put(':id')
  async update(@Param('id') userId: number, @Body() user: User): Promise<User> {
    return this.userService.update(userId, user);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.findByEmail(email);
  }
}
