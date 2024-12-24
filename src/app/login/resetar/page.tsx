'use client';

import LoginResetarForm from '@/components/login/login-resetar-form';
import { useSearchParams } from 'next/navigation';


type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default function ResetarPage() {
  const key = useSearchParams().get('key') || ''
  const login = useSearchParams().get('login') || ''
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm
        keyToken={key}
        login={login}
      />
    </div>
  );
}
