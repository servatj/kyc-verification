import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { KYCModule } from './kyc/kyc.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    KYCModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      expandVariables: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
