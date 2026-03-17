import { useState } from "react";
import { Encounters } from "./EncounterData";

export type GameOption = {
  text: string;
  action: () => void;
};

export type GameEncounter = {
  head: string;
  asciiUrl: string;
  content: string;
  options: GameOption[];
};

export function useGame() {
  const [currentId, setCurrentId] = useState("start");
  const encounter: GameEncounter = {
    head: Encounters[currentId].head,
    asciiUrl: Encounters[currentId].asciiUrl,
    content: Encounters[currentId].content,
    options: Encounters[currentId].options.map(opt => ({
      text: opt.text,
      action: () => setCurrentId(opt.nextId)
    }))
  };

  return { encounter };
}