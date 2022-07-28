import React from "react";
import { useLocation } from "react-router-dom";
import { Title } from "../../styles/GlobalStyle";
import { UserHeaderCss } from "./style";
import UserHeaderNav from "./UserHeaderNav";

function UserHeader() {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();


  React.useEffect(() => {
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste tua foto");
        break;
      case "/conta/estatisticas":
        setTitle("estatisticas");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [pathname]);

  
  return (
    <UserHeaderCss>
      <Title className="animeleft">{title}</Title>
      <UserHeaderNav />
    </UserHeaderCss>
  );
}

export default UserHeader;
