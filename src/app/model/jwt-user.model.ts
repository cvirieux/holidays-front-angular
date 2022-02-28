export interface JwtUser {
  roles: string[];
  login: string;
  exp: number;
}
