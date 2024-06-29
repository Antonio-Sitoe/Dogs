import Feed from "../../Components/Feed/Feed";
import Head from "../../Components/Head/Head";

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs com o feed de fotos" />
      <Feed />
    </section>
  );
}

export default Home;
