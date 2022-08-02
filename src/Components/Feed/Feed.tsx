import React from "react";
import styled from "styled-components";
import { IPhotoGet } from "../../Types/interfaces";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export const FeedContainer = styled.section`
  
`;

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState<null | IPhotoGet>(null);
  return (
    <FeedContainer>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </FeedContainer>
  );
}

export default Feed;
