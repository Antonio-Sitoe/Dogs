import React from "react";
import { Img, Skeleton, WrapperImage } from "./style";

interface ImageProps {
  alt: string;
  src: string;
}
const Image = ({ alt, src, ...rest }: ImageProps) => {
  const [skeleton, setSkeleton] = React.useState(true);
  function handleLoadImg({ target }: any) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <WrapperImage>
      {skeleton && <Skeleton />}
      <Img onLoad={handleLoadImg} src={src} alt={alt} {...rest} />
    </WrapperImage>
  );
};

export default Image;
