import React, { FormEvent } from "react";
import Button from "../../Components/Form/Button/Button";
import Input from "../../Components/Form/Input/Input";
import UserContext from "../../Contexts/UserContext";
import Error from "../../Helpers/Error/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

import { AnimeLeft, Title } from "../../styles/GlobalStyle";
import { LoginForms } from "./style";
import { USER_POST } from "../../services/Api";

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
  const { error, loading, request } = useFetch();
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  async function CreateUser(e: FormEvent) {
    e.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      const { options, url } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      try {
        const { response } = await request(url, options);
        if (response?.ok) userLogin(username.value, password.value);
      } catch (er) {
        console.log(er);
      }
    }
  }
  return (
    <AnimeLeft>
      <Title>Cadastre-se</Title>
      <LoginForms onSubmit={CreateUser}>
        <Input {...username} label="Usuario" type="text" name="username" />
        <Input {...email} label="Email" type="email" name="email" />
        <Input {...password} label="Senha" type="password" name="password" />
        {!loading ? (
          <Button text="Cadastrar" />
        ) : (
          <Button text="Carregando..." disabled={true} />
        )}
        {error && <Error error={error} />}
      </LoginForms>
    </AnimeLeft>
  );
}

export default LoginCreate;
