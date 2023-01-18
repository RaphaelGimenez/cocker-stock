import { client } from '@cocker-stock/data-access';
import { Credentials } from '@cocker-stock/util-types';

export const apiUsers = {
  signup: (credentials: Credentials) => {
    return client.post('/users/signup', credentials);
  },
};
