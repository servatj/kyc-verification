import { User } from 'src/users/entities/user.entity';

const userMock: User = {
  id: 1,
  name: 'John Doe',
  email: 'jservatlorca@gmail.com',
  password: '123456',
  role: 'admin',
  isKycVerified: true,
  created_at: new Date(),
  updated_at: new Date(),
};

export default userMock;
