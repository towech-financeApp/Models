export default interface User {
  _id: string;
  name: string;
  username: string;
  password: string | undefined;
  role: string;
  accountConfirmed: boolean;
  refreshTokens: string[];
  singleSessionToken: string | undefined;
  createdAt: Date;
}
