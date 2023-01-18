import { SignupForm } from '@cocker-stock/stock-dashboard/feature-signup';

/* eslint-disable-next-line */
export interface SignupProps {}

export function Signup(props: SignupProps) {
  return (
    <div>
      <h1>Welcome to Signup!</h1>
      <SignupForm />
    </div>
  );
}

export default Signup;
