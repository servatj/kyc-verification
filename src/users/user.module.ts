import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './adapters/repositories/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
