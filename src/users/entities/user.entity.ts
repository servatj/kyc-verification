export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
  password: string;
  is_kyc_verified: boolean;
  role: string;
  created_at: Date;
  updated_at: Date = null;
}
