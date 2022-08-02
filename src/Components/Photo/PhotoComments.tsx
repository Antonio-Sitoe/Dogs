import { Comments } from "../../Types/interfaces";
import { PhotoCommentsCss } from './PhotoCss';

interface IPhotoComments {
  id: number;
  comments: Array<Comments>;
}

function PhotoComments({ id, comments }: IPhotoComments) {
  return <PhotoCommentsCss>PhotoComments</PhotoCommentsCss>;
}

export default PhotoComments;
