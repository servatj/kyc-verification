export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  isKycVerified: boolean;
  created_at: Date;
  updated_at: Date;
}
