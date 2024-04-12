import { Injectable } from '@nestjs/common';
import { KYC } from './entities/kyc.entity';
import { IKYCRepository } from './ports/kyc.repository.interface';

@Injectable()
export class KYCService {
  constructor(private kycRepository: IKYCRepository) {}

  async submitKYC(userId: string, kycData: any): Promise<KYC> {
    const kyc = new KYC(userId, kycData);
    return this.kycRepository.createKYC(kyc);
  }

  async checkKYCStatus(userId: string): Promise<string> {
    const kyc = await this.kycRepository.findKYCByUserId(userId);
    return kyc.status;
  }
}
