import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { Comments } from "../../Types/interfaces";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../services/Api";
import Error from "../../Helpers/Error/Error";
import { FormPhoto, Textearea } from "./PhotoCss";
import SendSvg from "../../assets/SendSvg";

interface IPhotoComments {
  id: number;
  setcommentContent: Dispatch<SetStateAction<Comments[]>>;
}

function PhotoCommentsForm({ id, setcommentContent }: IPhotoComments) {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState("");

  async function handleSubmitComment(e: FormEvent) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response?.ok) {
      setComment("");
      setcommentContent((commentPreview) => [...commentPreview, json]);
    }
  }

  return (
    <FormPhoto onSubmit={handleSubmitComment}>
      <Textearea
        id="comment"
        name="comment"
        placeholder="Deixe o seu comentario..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <SendSvg />
      </button>
      {error && <Error error={error} />}
    </FormPhoto>
  );
}

export default PhotoCommentsForm;
