import React, { FormEvent } from "react";
import Button from "../../Components/Form/Button/Button";
import Input from "../../Components/Form/Input/Input";
import UserContext from "../../Contexts/UserContext";
import Error from "../../Helpers/Error/Error";
import useForm from "../../Hooks/useForm";
import { Link } from "react-router-dom";
import { AnimeLeft, Title } from "../../styles/GlobalStyle";
import { LinkLosthref, LoginForms, Register } from './style';

function LoginForm() {
  const { userLogin, error, loading } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <AnimeLeft>
      <Title>Login</Title>
      <LoginForms onSubmit={handleSubmit}>
        <Input {...username} label="Usuario" type="text" name={"username"} />
        <Input {...password} label="Senha" type="password" name={"password"} />
        {!loading ? (
          <Button text="Entrar" />
        ) : (
          <Button text="Carregando..." disabled={true} />
        )}
        {error && <Error error={error} />}
      </LoginForms>
      <LinkLosthref to="/login/perdeu">Perdeu a Senha ?</LinkLosthref>
      <Register>
        <h2>Cadastre-se</h2>
        <p>Ainda na possu conta? Cadastre-se no site</p>
        <Link to="/login/criar">Cadastrar</Link>
      </Register>
    </AnimeLeft>
  );
}

export default LoginForm;
