import React, { FormEvent } from "react";
import Button from "../../Components/Form/Button/Button";
import Input from "../../Components/Form/Input/Input";
import UserContext from "../../Contexts/UserContext";
import Error from "../../Helpers/Error/Error";
import useForm from "../../Hooks/useForm";
import { Link } from "react-router-dom";
import { AnimeLeft, Title } from "../../styles/GlobalStyle";
import { LinkLosthref, LoginForms, Register } from "./style";
import Head from "../../Components/Head/Head";

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
      <Head title={"Login"} description="Login conta" />
      <Title>Login</Title>
      <LoginForms onSubmit={handleSubmit}>
        <Input {...username} label="Username" type="text" name={"username"} />
        <Input {...password} label="Password" type="password" name={"password"} />
        {!loading ? (
          <Button text="Enter" />
        ) : (
          <Button text="Loading..." disabled={true} />
        )}
        {error && <Error error={"Incorrect data"} />}
      </LoginForms>
      <LinkLosthref to="/login/perdeu">Forgot Password?</LinkLosthref>
      <Register>
        <h2>Register</h2>
        <p>Don't have an account? Register here.</p>
        <Link to="/login/criar">Register</Link>
      </Register>
    </AnimeLeft>
  );
}

export default LoginForm;
