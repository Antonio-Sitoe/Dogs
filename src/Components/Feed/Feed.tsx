import React from "react";
import { IPhotoGet } from "../../Types/interfaces";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

interface IFeed {
  user: number | string;
}

function Feed({ user }: IFeed) {
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
          console.log(true);
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
    </>
  );
}

export default Feed;
