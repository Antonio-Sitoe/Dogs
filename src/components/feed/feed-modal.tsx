'use client';

import PhotoContent from '../photo/photo-content';
import styles from './feed-modal.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { Photo } from '@/actions/photos-get';

export default function FeedModal({ photo }: { photo: Photo }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes('foto')) {
    return null;
  }

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
}
