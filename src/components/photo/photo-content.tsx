'use client';

import React from 'react';
import styles from './photo-content.module.css';
import PhotoComments from './photo-comments';
import PhotoDelete from './photo-delete';
import Link from 'next/link';
import { useUser } from '@/context/user-context';
import Image from 'next/image';
import { Photo } from '@/actions/photos-get';

const PhotoContent = ({
  data,
  single,
}: {
  data: Photo;
  single: boolean;
}) => {
  const { user } = useUser();
  const { id, comments, imagem, nome, peso, idade, acessos, author } = data;


  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={imagem} alt={nome} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === author ? (
              <PhotoDelete id={String(id)} />
            ) : (
              <Link href={`/perfil/${author}`}>@{author}</Link>
            )}
            <span className={styles.visualizacoes}>{acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${id}`}>{nome}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{peso} kg</li>
            <li>{idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
