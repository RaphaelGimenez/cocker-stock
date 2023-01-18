import { AuthForm } from '@cocker-stock/stock-dashboard/feature-auth';

/* eslint-disable-next-line */
export interface SignupProps {}

export function Signup(props: SignupProps) {
  return (
    <div>
      <h1>Welcome to Signup!</h1>
      <AuthForm />
    </div>
  );
}

export default Signup;
