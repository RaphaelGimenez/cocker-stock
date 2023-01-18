import { apiUsers } from '@cocker-stock/data-access';
import { useMutation } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export function useSignup() {
  return useMutation({
    mutationFn: apiUsers.signup,
  });
}

export default useSignup;
