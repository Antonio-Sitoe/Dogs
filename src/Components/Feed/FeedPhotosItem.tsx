import { IPhotoGet } from "../../@types/interfaces";
import { SetModalPhoto } from "../../@types/Type";
import Image from "../Image/Image";
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
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </FeedPhotoItemCss>
  );
}

export default FeedPhotosItem;
