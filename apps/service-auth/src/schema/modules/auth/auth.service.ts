export interface User {
  id: string;
  username: string;
  password: string;
}

// In-memory users storage
export const users: User[] = [
  {
    id: "1",
    username: "admin",
    password: "admin",
  }
];
