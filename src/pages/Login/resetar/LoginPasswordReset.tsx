import React, { FormEvent } from "react";
import Input from "../../../Components/Form/Input/Input";
import { Title } from "../../../styles/GlobalStyle";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import Button from "../../../Components/Form/Button/Button";
import Error from "../../../Helpers/Error/Error";
import { RECOVERY_RESET } from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import Head from '../../../Components/Head/Head';

function LoginPasswordReset() {
  const password = useForm();
  const { error, loading, request } = useFetch<string>();
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const navigate = useNavigate();

  async function handlSubmit(e: FormEvent) {
    e.preventDefault();
    if (password.validate()) {
      const { options, url } = RECOVERY_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response?.ok) navigate("/login");
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParams = params.get("key");
    const loginParams = params.get("login");
    console.log(params.get("key"));
    if (keyParams) setKey(keyParams);
    if (loginParams) setLogin(loginParams);
  }, []);

  return (
    <div>
          <Head title={"Resetar a senha "} description="Login conta" />
      <Title>Resetar a Senha</Title>
      <form onSubmit={handlSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button text="Enviando" disabled={true} />
        ) : (
          <Button text="Resetar" />
        )}
        {error && <Error error={error} />}
      </form>
    </div>
  );
}

export default LoginPasswordReset;
