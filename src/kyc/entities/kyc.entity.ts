import * as uuid from 'uuid';
export class KYC {
  id: string;
  userId: string;
  name: string;
  dob: string;
  address: string;
  phone: string;
  email: string;
  photo: string;
  document: string;
  status: string = 'pending';

  constructor(userId, kycData) {
    if (!userId || !kycData) {
      throw new Error('Invalid data');
    }
    this.id = new uuid.v4();
    this.userId = userId;
    this.name = kycData.name;
    this.dob = kycData.dob;
    this.address = kycData.address;
    this.phone = kycData.phone;
    this.email = kycData.email;
    this.photo = kycData.photo;
    this.document = kycData.document;
  }

  approve() {
    this.status = 'approved';
  }

  reject() {
    this.status = 'rejected';
  }

  isApproved() {
    return this.status === 'approved';
  }
}
