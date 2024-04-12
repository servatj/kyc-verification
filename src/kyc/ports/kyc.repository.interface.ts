import { KYC } from '../entities/kyc.entity';

export interface IKYCRepository {
  createKYC(kyc: KYC): Promise<KYC>;
  findKYCByUserId(userId: string): Promise<KYC>;
}
