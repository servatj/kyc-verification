import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { KycModule } from './kyc/kyc.module';

@Module({
  imports: [UserModule, KycModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
