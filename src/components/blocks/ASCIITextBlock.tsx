import { useState, useEffect } from 'react';
import styles from './TextBlock.module.css';
import TextBlock from "./TextBlock";

type Option = {
  text: string;
  action: () => void;
};

type Props = {
  head: string;
  asciiUrl: string; 
  content: string;
  link?: string; 
  options?: Option[];
};

const DEFAULT_ASCII = `
   ___
  (o o)
 (  V  )
  |   |
NO ASCII
`;

export default function ASCIITextBlock({ head, asciiUrl, link, content, options }: Props) {
  const [ascii, setAscii] = useState('Loading...');

  useEffect(() => {
    fetch(asciiUrl)
      .then(res => res.text())
      .then(text => {
        if (text.trim().toLowerCase().startsWith("<!doctype html>")) {
          throw new Error("Server send HTML");
        }
        setAscii(text);
      })
      .catch(() => setAscii(DEFAULT_ASCII));
  }, [asciiUrl]);

  const AsciiContent = () => (
    <pre style={{ margin: 0, fontSize: '0.6rem', lineHeight: '1', overflow: 'hidden', textAlign: 'center' }}>
      {ascii}
    </pre>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      
      {/* Box for ASCII */}
      <div className={styles.textBlock} style={{ width: 'fit-content', margin: '0 auto', alignItems: 'center' }}>
        <div className={styles.imageWrapper} style={{ flex: 'none' }}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <AsciiContent />
            </a>
          ) : (
            <AsciiContent />
          )}
        </div>
      </div>

      <TextBlock head={head} content={content} />

      {/* Box for Buttons */}
      {options && options.length > 0 && (
        <div className={styles.textBlock} style={{ width: 'fit-content', margin: '0 auto', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
          {options.map((opt, idx) => (
            <button key={idx} onClick={opt.action} style={{ padding: '10px 20px', cursor: 'pointer' }}>
              {opt.text}
            </button>
          ))}
        </div>
      )}
      
    </div>
  );
}