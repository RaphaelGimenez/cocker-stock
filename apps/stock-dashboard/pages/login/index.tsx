import { AuthForm } from '@cocker-stock/stock-dashboard/feature-auth';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <div>
      <h1>Welcome to Login!</h1>
      <AuthForm view="sign_in" />
    </div>
  );
}

export default Login;
