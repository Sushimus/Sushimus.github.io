import { useState, useEffect } from 'react';

type Props = {
  asciiUrl: string; 
  link?: string; 
};

export default function ASCIIBlock({ asciiUrl, link }: Props) {
  const [ascii, setAscii] = useState<string | null>('Loading...');

  useEffect(() => {
    if (!asciiUrl) {
      setAscii(null);
      return; 
    }

    fetch(asciiUrl)
      .then(res => res.text())
      .then(text => {
        if (text.trim().toLowerCase().startsWith("<!doctype html>")) {
          throw new Error("Server send HTML");
        }
        setAscii(text);
      })
      .catch(() => setAscii(null));
  }, [asciiUrl]);

  if (!ascii) return null;

  // Calculate font size. 3000 / 5000 = 0.6rem. 3000 / 10000 = 0.3rem.
  const charCount = ascii.length || 1;
  const dynamicSize = `${3000 / charCount}rem`;

  const AsciiContent = () => (
    <pre style={{ 
      margin: 0, 
      fontSize: dynamicSize, 
      lineHeight: '1', 
      textAlign: 'center' 
    }}>
      {ascii}
    </pre>
  );

  return (
    <div 
      style={{ 
        background: 'var(--dateThemeColour)',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        width: 'fit-content',
        height: 'fit-content',
        margin: '0 auto' 
      }}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <AsciiContent />
        </a>
      ) : (
        <AsciiContent />
      )}
    </div>
  );
}