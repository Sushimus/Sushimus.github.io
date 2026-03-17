import styles from './TextBlock.module.css';
import TextBlock from "./TextBlock";
import ASCIIBlock from "./ASCIIBlock";

type Option = {
  text: string;
  action: () => void;
};

type Props = {
  head: string;
  asciiUrl?: string; 
  content: string;
  link?: string; 
  options?: Option[];
};

export default function ASCIITextBlock({ head, asciiUrl, link, content, options }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Top: ASCII Area */}
      {asciiUrl && (
        <ASCIIBlock asciiUrl={asciiUrl} link={link} />
      )}

      {/* Bottom: Text and Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        <TextBlock head={head} content={content} />

        {options && options.length > 0 && (
          <div className={styles.textBlock} style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {options.map((opt, idx) => (
              <button 
                key={idx} 
                onClick={opt.action} 
                style={{ 
                  padding: '10px 20px', 
                  cursor: 'pointer',
                  background: 'var(--dateThemeColour)',
                  color: 'inherit',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  whiteSpace: 'pre-line' 
                }}
              >
                {opt.text}
              </button>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}