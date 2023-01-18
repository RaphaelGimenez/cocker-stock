import { AuthForm } from '@cocker-stock/stock-dashboard/feature-auth';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      router.push('/dashboard');
    }
  });

  return (
    <div>
      <h1>Welcome to Login!</h1>
      <AuthForm view="sign_in" />
    </div>
  );
}

export default Login;
