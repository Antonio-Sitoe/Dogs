import React, { useEffect } from "react";

interface Props {
  title: string;
  description: string;
}

const Head = (props: Props) => {
  useEffect(() => {
    document.title = props.title + "| Dogs";
    document
      .querySelector("meta[description]")
      ?.setAttribute("content", props.description || "");
  }, [props]);
  return <></>;
};

export default Head;
