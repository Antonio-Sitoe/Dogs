import Feed from "../../Components/Feed/Feed";
import Head from "../../Components/Head/Head";

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Photos" description="UVic Student Onboarding website landing page, with a photo feed." />
      <Feed />
    </section>
  );
}

export default Home;
