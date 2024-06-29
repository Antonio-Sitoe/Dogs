import LoginEsqueciForm from '@/components/login/login-esqueci-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recupere a sua senha',
};

export default async function EsqueciPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginEsqueciForm />
    </div>
  );
}
