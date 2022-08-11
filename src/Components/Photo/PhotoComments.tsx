import React from "react";
import { Comments } from "../../Types/interfaces";
import { PhotoCommentsCss } from "./PhotoCss";
import UserContext from "../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

interface IPhotoComments {
  id: number;
  comments: Array<Comments>;
}

function PhotoComments({ id, comments }: IPhotoComments) {
  const { login } = React.useContext(UserContext);
  const commentSection = React.useRef<HTMLUListElement | null>(null);
  const [commentContent, setcommentContent] = React.useState(() => comments);

  return (
    <PhotoCommentsCss>
      <ul ref={commentSection}>
        {commentContent.map(
          ({ comment_ID, comment_author, comment_content }) => {
            return (
              <li key={comment_ID}>
                <b>{comment_author}: </b> <span>{comment_content}</span>
              </li>
            );
          }
        )}
      </ul>
      {login && (
        <PhotoCommentsForm id={id} setcommentContent={setcommentContent} />
      )}
    </PhotoCommentsCss>
  );
}

export default PhotoComments;
