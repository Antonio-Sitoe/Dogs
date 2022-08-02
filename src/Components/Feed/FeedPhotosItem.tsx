import { IPhotoGet } from "../../Types/interfaces";
import { SetModalPhoto } from "../../Types/Type";
import { FeedPhotoItemCss } from "./FeedStyle";

interface IFeedPhotosItemProps {
  photo: IPhotoGet;
  setModalPhoto: SetModalPhoto;
}

function FeedPhotosItem({ setModalPhoto, photo }: IFeedPhotosItemProps) {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <FeedPhotoItemCss onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </FeedPhotoItemCss>
  );
}

export default FeedPhotosItem;
