import { IUserRepository } from './ports/user.repository.interface';
import { User } from './entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository') private userRepository: IUserRepository,
  ) {}

  async create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async findById(userId: number): Promise<User> {
    return this.userRepository.findById(userId);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findByEmail(email);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async update(userId: number, user: User): Promise<User> {
    return this.userRepository.update(userId, user);
  }

  async delete(userId: number): Promise<void> {
    return this.userRepository.delete(userId);
  }
}
