import Head from "../../Components/Head/Head";
import useFetch from "../../Hooks/useFetch";

function UserStats() {
  const { data, error, request, loading } = useFetch(); 
  return (
    <div>
      <Head title={"Estatisticas "} description="Minha conta" />
    </div>
  );
}

export default UserStats;
