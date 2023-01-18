import { supabase } from '@cocker-stock/data-access';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

/* eslint-disable-next-line */
export interface AuthFormProps {}

export function AuthForm(props: AuthFormProps) {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      view="sign_up"
      localization={{
        variables: {
          sign_in: {
            email_label: 'Email',
            password_label: 'Mot de passe',
            button_label: 'Se connecter',
          },
          sign_up: {
            email_label: 'Email',
            password_label: 'Mot de passe',
            button_label: "S'inscrire",
          },
        },
      }}
    />
  );
}

export default AuthForm;
