export interface User {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  // role?: string;
  // locale?: string;
  lastLogin?: string | null;
}
