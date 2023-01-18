import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const form = useForm();

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        label="Email"
        placeholder="you@email.com"
        type="email"
        withAsterisk
      />
      <PasswordInput label="Mot de passe" withAsterisk />
      <Button type="submit">Créer un compte</Button>
    </form>
  );
}

export default SignupForm;
