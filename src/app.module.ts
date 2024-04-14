import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { KYCModule } from './kyc/kyc.module';
import { ConfigModule } from '@nestjs/config';
import * as schema from './providers/db/schema';
import { DrizzleMySqlModule } from '@knaadh/nestjs-drizzle-mysql2';

@Module({
  imports: [
    UserModule,
    KYCModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development.local'],
      expandVariables: true,
    }),
    DrizzleMySqlModule.register({
      tag: `DB_${process.env.ENV}`,
      mysql: {
        connection: 'client',
        config: {
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          database: process.env.DB_DATABASE,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        },
      },
      config: { schema: { ...schema }, mode: 'default' },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
