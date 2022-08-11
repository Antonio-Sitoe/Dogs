import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../services/Api";
import { ButtonDelete } from "./PhotoCss";

function PhotoDelete({ id }: { id: number }) {
  const { loading, request } = useFetch();
  const handleDeletePhoto = async () => {
    const confirm = window.confirm("Voce tem certeza que deseja deletar?");
    if (confirm) {
      const { options, url } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response?.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <ButtonDelete disabled>Deletando</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleDeletePhoto}>Deletar</ButtonDelete>
      )}
    </>
  );
}

export default PhotoDelete;
