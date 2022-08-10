import React from "react";
import Error from "../../Helpers/Error/Error";
import Loading from "../../Helpers/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET_ID } from "../../services/Api";
import { IPhotoGet, IPhotoGetId } from "../../Types/interfaces";
import { SetModalPhoto } from "../../Types/Type";
import PhotoContent from "../Photo/PhotoContent";
import { FeedModalCss } from "./FeedStyle";

interface FeedModalProps {
  photo: IPhotoGet;
  setModalPhoto: SetModalPhoto;
}

function FeedModal({ photo, setModalPhoto }: FeedModalProps) {
  const { data, error, loading, request } = useFetch<IPhotoGetId>();

  React.useEffect(() => {
    async function getPhotoById() {
      const { url, options } = PHOTO_GET_ID(photo.id);
      await request(url, options);
    }
    getPhotoById();
  }, [request, photo.id]);

  function handleCloseModal(event: React.MouseEvent<HTMLButtonElement>) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }
  return (
    <FeedModalCss onClick={handleCloseModal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent photoData={data} />}
    </FeedModalCss>
  );
}

export default FeedModal;
