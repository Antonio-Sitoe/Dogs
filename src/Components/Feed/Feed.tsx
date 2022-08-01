import React from "react";
import styled from "styled-components";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export const FeedContainer = styled.section``;

function Feed() {
  return (
    <FeedContainer>
      <FeedModal />
      <FeedPhotos />
    </FeedContainer>
  );
}

export default Feed;
