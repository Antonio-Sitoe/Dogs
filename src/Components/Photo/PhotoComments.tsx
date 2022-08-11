import React from "react";
import { Comments } from "../../Types/interfaces";
import { PhotoCommentsCss } from "./PhotoCss";
import UserContext from "../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import useMedia from "../../Hooks/useMedia";

interface IPhotoComments {
  id: number;
  comments: Array<Comments>;
}

function PhotoComments({ id, comments }: IPhotoComments) {
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef<HTMLUListElement | null>(null);
  const [commentContent, setcommentContent] = React.useState(() => comments);

  React.useEffect(() => {
    commentsSection.current?.scrollTo({
      behavior: "smooth",
      top: commentsSection.current.scrollHeight,
    });
  }, [comments]);

  return (
    <>
      <PhotoCommentsCss ref={commentsSection}>
        {commentContent.map(
          ({ comment_ID, comment_author, comment_content }) => {
            return (
              <li key={comment_ID}>
                <b>{comment_author}: </b>
                <span>{comment_content}</span>
              </li>
            );
          }
        )}
      </PhotoCommentsCss>
      {login && (
        <PhotoCommentsForm id={id} setcommentContent={setcommentContent} />
      )}
    </>
  );
}

export default PhotoComments;
