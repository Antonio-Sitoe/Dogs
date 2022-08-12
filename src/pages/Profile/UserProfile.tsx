import { useParams } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import Error from "../../Helpers/Error/Error";
import { Title } from "../../styles/GlobalStyle";

const UserProfile = () => {
  const { user } = useParams();
  if (user)
    return (
      <section className="container mainContainer">
        <Title style={{ margin: "2rem 0" }}>{user}</Title>
        <Feed user={user} />
      </section>
    );
  return <Error error="Pagina invalida" />;
};

export default UserProfile;
