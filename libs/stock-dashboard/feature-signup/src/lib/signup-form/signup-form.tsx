import styles from './signup-form.module.css';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SignupForm!</h1>
    </div>
  );
}

export default SignupForm;
