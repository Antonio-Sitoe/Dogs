import React from "react";
import Head from "../../Components/Head/Head";
import Error from "../../Helpers/Error/Error";
import Loading from "../../Helpers/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../services/Api";
import { UserStatisArrayData } from "../../Types/Type";

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

function UserStats() {
  const { data, error, request, loading } = useFetch<UserStatisArrayData>();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      const { json } = await request(url, options);
      console.log(json);
    }

    let getDataisStart = true;
    if (getDataisStart) {
      getData();
    }
    return () => {
      getDataisStart = false;
    };
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title={"Estatisticas "} description="Minha conta" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  return null;
}

export default UserStats;
