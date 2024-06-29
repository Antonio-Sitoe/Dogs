import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./criar/LoginCreate";
import LoginPasswordLost from "./perdeu/LoginPasswordLost";
import LoginPasswordReset from "./resetar/LoginPasswordReset";
import UserContext from "../../Contexts/UserContext";
import { LoginCss } from "./style";
import NotFound404 from "../404";
import Head from "../../Components/Head/Head";

function Login() {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <LoginCss>
      <Head title="Entrar na plataforma" description="Pagina de login" />
      <div className="forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
    </LoginCss>
  );
}

export default Login;
