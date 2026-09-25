import { useEffect, useState } from 'react';

const accountKey = 'artami-account';

export const useAccount = () => {
  const [email, setEmail] = useState(() => localStorage.getItem(accountKey) || '');

  useEffect(() => {
    if (email) localStorage.setItem(accountKey, email);
    else localStorage.removeItem(accountKey);
  }, [email]);

  return {
    email,
    register: (value: string) => setEmail(value.trim().toLowerCase()),
    logout: () => setEmail(''),
  };
};
