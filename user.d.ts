export default interface User {
  userid: number;
  name: string;
  username: string;
  password: string | undefined;
  role: string;
  accountconfirmed: boolean;
  refreshtokens: string[];
  singlesessiontoken: string;
  createdAt: Date;
}