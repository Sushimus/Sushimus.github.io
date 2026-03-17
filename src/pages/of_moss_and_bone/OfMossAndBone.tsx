import "./OfMossAndBone.css";
import ASCIITextBlock from "../../components/blocks/ASCIITextBlock";
import { useGame } from "./Game";

export default function OfMossAndBones() {
  const { encounter } = useGame();

  return (
    <>
      <header className="moss-banner">
        <h1 className="moss-title">Of Moss and Bones</h1>
      </header>
      
      <div className="moss-container">
        <div className="moss-center-box">
          <ASCIITextBlock 
            head={encounter.head}
            asciiUrl={encounter.asciiUrl}
            content={encounter.content}
            options={encounter.options}
          />
        </div>
      </div>
    </>
  );
}