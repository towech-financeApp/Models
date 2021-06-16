export default interface User {
  userID: number;
  name: string;
  username: string;
  password: string | undefined;
  role: string;
  accountConfirmed: boolean;
  refreshTokens: string[];
  singleSessionToken: string;
  createdAt: Date;
}