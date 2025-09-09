export interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
  refreshToken?: string;
}

export interface LoginErrorResponse {
  message: string;
  field?: keyof LoginForm;
}
