export interface User {
  id: number;
  name: string;
  email: string;
  joinedClubs: number[]; // IDs of clubs
}
