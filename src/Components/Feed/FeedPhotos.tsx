import React from "react";
import Error from "../../Helpers/Error/Error";
import Loading from "../../Helpers/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../services/Api";
import { AnimeLeft } from "../../styles/GlobalStyle";
import { IPhotoGet } from "../../Types/interfaces";
import FeedPhotosItem from "./FeedPhotosItem";
import { FeedPhotoCss } from "./FeedStyle";

function FeedPhotos() {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const getAllPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json, response } = await request(url, options);
      console.log(json);
    };
    getAllPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <AnimeLeft>
        <FeedPhotoCss>
          {data.map((photo: IPhotoGet) => {
            return <FeedPhotosItem key={photo.id} photo={photo} />;
          })}
        </FeedPhotoCss>
      </AnimeLeft>
    );
  return null;
}

export default FeedPhotos;
