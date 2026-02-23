import styles from './TextBlock.module.css';
import ReactMarkdown from "react-markdown";
import dedent from "dedent";

type Props = {
  head: string;
  content: string;
};

export default function TextBlock({ head, content }: Props) {
  return (
    <div className={styles.textBlock}>
      <h2>{head}</h2>
      <ReactMarkdown>{dedent(content)}</ReactMarkdown>
    </div>
  );
}