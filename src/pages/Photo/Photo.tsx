import React from "react";
import { useParams } from "react-router-dom";
import PhotoContent from "../../Components/PhotoContent/PhotoContent";
import Error from "../../Helpers/Error/Error";
import Loading from "../../Helpers/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../services/Api";
import { IPhotoGetId } from "../../Types/interfaces";

function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch<IPhotoGetId>();

  React.useEffect(() => {
    (async () => {
      if (id) {
        const { url, options } = PHOTO_GET(id);
        await request(url, options);
      }
    })();
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent photoData={data} single={true} />
      </section>
    );
  else return null;
}

export default Photo;
