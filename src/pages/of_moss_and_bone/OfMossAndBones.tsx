import "./OfMossAndBones.css";
import ASCIITextBlock from "../../components/blocks/ASCIITextBlock";
import { useGame, EncounterPool } from "./Game";

export default function OfMossAndBones() {
  const { encounter, chooseOption, inventory } = useGame();
  if (!encounter) return <div>ErrorCode: Rock</div>;//if the entire folder for encounters is missing, show rock

  return (
    <>
      <header className="moss-banner">
        <h1 className="moss-title">Of Moss and Bones</h1>
      </header>
      
      <div className="moss-container">
        <div className="moss-center-box">
          <ASCIITextBlock 
            head={encounter.header}
            asciiUrl={encounter.asciiUrl}
            content={encounter.content}
            options={encounter.options?.map(opt => {
              const target = EncounterPool[opt.id];
              const preview = target ? target.dialoguePreview : "Missing Text";
              const reqs = target?.requirements || [];
              
              const hasAll = reqs.every(r => inventory.includes(r));//check requirements
              const reqText = reqs.length > 0 ? `\n[${reqs.join("] [")}]` : "";//display any requirements in brackets

              return {
                text: preview + reqText,
                action: () => {
                  if (hasAll) {
                    chooseOption(opt.id);
                  }
                }
              };
            }) || []}
          />
        </div>
      </div>
    </>
  );
}