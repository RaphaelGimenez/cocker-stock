import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ViewType } from '@supabase/auth-ui-react/dist/esm/src/types';

/* eslint-disable-next-line */
export interface AuthFormProps {
  view: ViewType;
}

export function AuthForm(props: AuthFormProps) {
  const supabaseClient = useSupabaseClient();

  return (
    <Auth
      supabaseClient={supabaseClient}
      appearance={{ theme: ThemeSupa }}
      view={props.view}
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
