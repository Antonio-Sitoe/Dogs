import { Link } from "react-router-dom";
import { Title } from "../../styles/GlobalStyle";
import { IPhotoGetId } from "../../Types/interfaces";
import PhotoComments from "./PhotoComments";
import {
  PhotoContentCss,
  PhotoContentDetailsCss,
  PhotoContentPhotoCss,
} from "./PhotoCss";

interface IPhotoContentProps {
  photoData: IPhotoGetId;
}
function PhotoContent({ photoData }: IPhotoContentProps) {
  const { comments, photo } = photoData;
  return (
    <PhotoContentCss>
      <PhotoContentPhotoCss>
        <img src={photo.src} alt={photo.title} />
      </PhotoContentPhotoCss>
      <PhotoContentDetailsCss>
        <div>
          <p className="autor">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
