import React, { Dispatch, SetStateAction } from "react";
import Error from "../../Helpers/Error/Error";
import Loading from "../../Helpers/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../services/Api";
import { AnimeLeft } from "../../styles/GlobalStyle";
import { IPhotoGet } from "../../Types/interfaces";
import { SetModalPhoto } from "../../Types/Type";
import FeedPhotosItem from "./FeedPhotosItem";
import { FeedPhotoCss } from "./FeedStyle";

interface IFeedPhotos {
  setModalPhoto: SetModalPhoto;
  setInFinite: Dispatch<SetStateAction<boolean>>;
  user: number | string;
  page: number;
}
function FeedPhotos({ setModalPhoto, setInFinite, user, page }: IFeedPhotos) {
  const { data, loading, error, request } = useFetch<[]>();
  React.useEffect(() => {
    const getAllPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page: page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInFinite(false);
      }
    };
    getAllPhotos();
  }, [request, user, page, setInFinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <AnimeLeft>
        <FeedPhotoCss>
          {data.map((photo: IPhotoGet) => {
            return (
              <FeedPhotosItem
                setModalPhoto={setModalPhoto}
                key={photo.id}
                photo={photo}
              />
            );
          })}
        </FeedPhotoCss>
      </AnimeLeft>
    );
  return null;
}

export default FeedPhotos;
