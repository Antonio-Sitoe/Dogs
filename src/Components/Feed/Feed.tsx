import React from "react";
import styled from "styled-components";
import { IPhotoGet } from "../../@types/interfaces";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feedback = styled.p`
  text-align: center;
  padding: 2rem 0 4rem 0;
  color: #888;
`;

interface IFeed {
  user?: number | string;
}

function Feed({ user = 0 }: IFeed) {
  const [modalPhoto, setModalPhoto] = React.useState<null | IPhotoGet>(null);
  const [pages, setPages] = React.useState<Array<number>>([1]);
  const [infinite, setInFinite] = React.useState(true);

  React.useEffect(() => {
    function infiniteScroll() {
      let wait = false;
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => {
            return [...pages, pages.length + 1];
          });
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    // adicionando o efeito ao window
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => {
        return (
          <FeedPhotos
            setInFinite={setInFinite}
            key={page}
            user={user}
            page={page}
            setModalPhoto={setModalPhoto}
          />
        );
      })}
      {!infinite && !user && <Feedback>Não existem mais postagens.</Feedback>}
    </>
  );
}

export default Feed;
