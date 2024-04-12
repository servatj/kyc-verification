import { IKYCRepository } from 'src/kyc/ports/kyc.repository.interface';
import { KYC } from '../../entities/kyc.entity';

export class KYCRepository implements IKYCRepository {
  private kyces: KYC[] = [];

  async createKYC(kyc: KYC): Promise<KYC> {
    this.kyces.push(kyc);
    return kyc;
  }

  async findKYCByUserId(userId: string): Promise<KYC> {
    return this.kyces.find((kyc) => kyc.userId === userId);
  }
}
