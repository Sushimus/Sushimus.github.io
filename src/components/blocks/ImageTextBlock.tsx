import { useState } from 'react';
import styles from './TextBlock.module.css';
import TextBlock from "./TextBlock";

type Props = {
  head: string;
  imgUrl: string;       // Desktop Image
  mobileImgUrl?: string; // Optional Mobile Image
  content: string;
  link?: string; 
};

export default function ImageTextBlock({ head, imgUrl, mobileImgUrl, link, content }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const useMobile = mobileImgUrl && !imgFailed;
  const wrapperClass = useMobile ? styles.imageWrapper : `${styles.imageWrapper} ${styles.mobileFallback}`;
  const ImageContent = () => {
    if (useMobile) {
      return (//try to show mobile image
        <picture>
          <source media="(max-width: 800px)" srcSet={mobileImgUrl} />
          <img 
            src={imgUrl} 
            alt="block picture" 
            onError={() => setImgFailed(true)}//if this fails trigger fallback
          />
        </picture>
      );
    } else {//just take the desktop image and chop it
      return <img src={imgUrl} alt="block picture" />;
    }
  };

  return (
    <div className={styles.block}>
      <div className={wrapperClass}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ImageContent />
          </a>
        ) : (
          <ImageContent />
        )}
      </div>

      <TextBlock head={head} content={content} />
    </div>
  );
}