import {
  mysqlTable,
  int,
  date,
  boolean,
  varchar,
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  first_name: varchar('first_name', { length: 255 }),
  last_name: varchar('last_name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  date_of_birth: date('date_of_birth'),
  password: varchar('password', { length: 255 }),
  is_kyc_verified: boolean('is_kyc_verified'),
  role: varchar('role', { length: 255 }),
  created_at: date('created_at').notNull(),
  updated_at: date('updated_at'),
});
