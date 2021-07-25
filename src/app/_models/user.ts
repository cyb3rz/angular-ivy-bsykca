export interface User {
  avatar: string;
  first_name: string;
  id: number;
  created_at: Date;
  updated_at: Date;
  verified: boolean;
  ssn: string;
  email: string;
  phone: string;
  name: string;
  message: string;
  token?: string;
}
