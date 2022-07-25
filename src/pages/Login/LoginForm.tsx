import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Form/Button/Button";
import Input from "../../Components/Form/Input/Input";
import UserContext from "../../Contexts/UserContext";
// @ts-ignore
import useForm from "../../Hooks/useForm";

function LoginForm() {
  const { userLogin } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input {...username} label="Usuario" type="text" name={"username"} />
        <Input {...password} label="Senha" type="password" name={"password"} />
        <Button text="Entrar" />
      </form>
      <Link to="/login/criar">Cadastrar</Link>
    </div>
  );
}

export default LoginForm;
