import { IPhotoGet } from "../../Types/interfaces";

interface IFeedPhotosItemProps {
  photo: IPhotoGet;
}

function FeedPhotosItem({ photo }: IFeedPhotosItemProps) {
  return (
    <li>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
