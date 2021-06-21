export default interface User {
  _id: number;
  name: string;
  username: string;
  password: string | undefined;
  role: string;
  accountConfirmed: boolean;
  refreshTokens: string[];
  singleSessionToken: string | undefined;
  createdAt: Date;
}
