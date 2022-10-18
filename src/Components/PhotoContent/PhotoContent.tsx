import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import { Title } from "../../styles/GlobalStyle";
import { IPhotoGetId } from "../../Types/interfaces";
import Image from "../Image/Image";
import PhotoComments from "./PhotoComments";
import {
  PhotoCommentsCss,
  PhotoContentCss,
  PhotoContentDetailsCss,
  PhotoContentPhotoCss,
} from "./style";
import PhotoDelete from "./PhotoDelete";
import Photo from "../../pages/Photo/Photo";

interface IPhotoContentProps {
  photoData: IPhotoGetId;
  single?: boolean;
}
function PhotoContent({ photoData, single }: IPhotoContentProps) {
  const { comments, photo } = photoData;
  const user = React.useContext(UserContext);
  return (
    <PhotoContentCss className={single === true ? "PhotoContentSingle" : ""}>
      <PhotoContentPhotoCss className={single === true ? "PhotoContentSingle" : ""}>
        <Image src={photo.src} alt={photo.title} />
      </PhotoContentPhotoCss>
      <PhotoContentDetailsCss className={single === true ? "PhotoContentSingle" : ""}>
        <div>
          <p className="autor">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className="visualizacao">{photo.acessos}</span>
          </p>

          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>

          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} years old</li>
          </ul>
        </div>
      </PhotoContentDetailsCss>
      <PhotoCommentsCss>School have you stressed out? {photo.title} is here to help relieve your suffering... somewhat. Come on down to the UVSS to play with {photo.title}! <br></br> <br></br> Photo credits courtesy of @{photo.author}!</PhotoCommentsCss>
    </PhotoContentCss>
  );
}

export default PhotoContent;
