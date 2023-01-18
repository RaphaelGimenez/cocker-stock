import styles from './auth-form.module.css';

/* eslint-disable-next-line */
export interface AuthFormProps {}

export function AuthForm(props: AuthFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthForm!</h1>
    </div>
  );
}

export default AuthForm;
