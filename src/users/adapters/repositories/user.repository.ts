import { IUserRepository } from '../../ports/user.repository.interface';
import { User } from '../../entities/user.entity';

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findById(userId: number): Promise<User> {
    return this.users.find((user) => user.id === userId);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async update(userId: number, user: User): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    this.users[userIndex] = user;
    return user;
  }

  async delete(userId: number): Promise<void> {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
