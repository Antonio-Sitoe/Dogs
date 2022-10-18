import { FormEvent } from "react";
import Button from "../../../Components/Form/Button/Button";
import Input from "../../../Components/Form/Input/Input";
import Head from "../../../Components/Head/Head";
import Error from "../../../Helpers/Error/Error";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import { RECOVERY_PASSWORD } from "../../../services/Api";
import { Title } from "../../../styles/GlobalStyle";

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFetch<string>();
  const urlBase = window.location.href.replace("perdeu", "resetar");

  async function handleRecoverPassword(e: FormEvent) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = RECOVERY_PASSWORD({
        login: login.value,
        url: urlBase,
      });
      await request(url, options);
    }
  }
  return (
    <section className="animeleft">
      <Head title={"Forgot password"} description="Account login" />
      <Title>Forgot Password?</Title>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleRecoverPassword}>
          <Input label="Email / Username" type="text" name="email" {...login} />
          {loading ? (
            <Button text="Sending" disabled={true} />
          ) : (
            <Button text="Send email" />
          )}
          {error && <Error error={error} />}
        </form>
      )}
    </section>
  );
}

export default LoginPasswordLost;
