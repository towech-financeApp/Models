import { BaseUser, FrontendUser, BackendUser } from "../Objects/user";

// Removes all fields except the "public" ones
const convert2BaseUser = (user: FrontendUser): BaseUser => {
  const output = {} as BaseUser;

  output._id = user._id;
  output.accountConfirmed = user.accountConfirmed;
  output.createdAt = user.createdAt;
  output.name = user.name;
  output.role = user.role;
  output.username = user.username;

  return output;
};

// Removes the fields only meant for backend
const convert2FrontendUser = (user: BackendUser): FrontendUser => {
  const output = convert2BaseUser(user) as FrontendUser;

  output.refreshTokens = user.refreshTokens;
  output.resetToken = user.resetToken;
  output.singleSessionToken = user.singleSessionToken;

  return output;
};

export {
  convert2BaseUser,
  convert2FrontendUser,
}
