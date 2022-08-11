import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import { Title } from "../../styles/GlobalStyle";
import { IPhotoGetId } from "../../Types/interfaces";
import Image from "../Image/Image";
import PhotoComments from "./PhotoComments";
import {
  PhotoContentCss,
  PhotoContentDetailsCss,
  PhotoContentPhotoCss,
} from "./PhotoCss";
import PhotoDelete from "./PhotoDelete";

interface IPhotoContentProps {
  photoData: IPhotoGetId;
}
function PhotoContent({ photoData }: IPhotoContentProps) {
  const { comments, photo } = photoData;
  const user = React.useContext(UserContext);
  return (
    <PhotoContentCss>
      <PhotoContentPhotoCss>
        <Image src={photo.src} alt={photo.title} />
      </PhotoContentPhotoCss>
      <PhotoContentDetailsCss>
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
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </PhotoContentDetailsCss>
      <PhotoComments id={photo.id} comments={comments} />
    </PhotoContentCss>
  );
}

export default PhotoContent;
