import { supabase } from '@cocker-stock/data-access';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

/* eslint-disable-next-line */
export interface AuthFormProps {}

export function AuthForm(props: AuthFormProps) {
  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
}

export default AuthForm;
