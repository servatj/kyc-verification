import { Module } from '@nestjs/common';
import { KYCService } from './kyc.service';
import { KYCController } from './kyc.controller';
import { KYCRepository } from './adapters/repositories/kyc.repository';

@Module({
  controllers: [KYCController],
  providers: [
    KYCService,
    { provide: 'IKYCRepository', useClass: KYCRepository },
  ],
})
export class KYCModule {}
