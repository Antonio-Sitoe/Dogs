import Head from "../Components/Head/Head";
import { Title } from "../styles/GlobalStyle";

function NotFound404() {
  return (
    <div className="container mainContainer" style={{ margin: "3rem auto" }}>
      <Head title={"Pagina nao encontrada "} description="Minha conta" />
      <Title>Erro: 404</Title>
      <p>Pagina nao encontrada</p>
    </div>
  );
}

export default NotFound404;
