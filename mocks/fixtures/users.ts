import { IUser } from "../../lib/api.interface";

export const getUsers = (): IUser[] => [
  {
    token: "token1",
    email: "user1@gmail.com",
    name: "Tester Number1",
  },
];
