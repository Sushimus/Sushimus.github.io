import { useState } from "react";

export type GameEncounter = {
  id: string;
  dialoguePreview: string;
  requirements: string[];

  header: string;
  asciiUrl: string;
  content: string;
  options: GameEncounter[];
};

const rawEncounters = import.meta.glob("../../data/of_moss_and_bones/encounters/**/*.json", { eager: true });
export const EncounterPool: Record<string, GameEncounter> = {};

for (const path in rawEncounters) {
  //@ts-ignore
  const data = rawEncounters[path].default || rawEncounters[path];
  EncounterPool[data.id] = data as GameEncounter;
}

const rawAscii = import.meta.glob("../../data/of_moss_and_bones/ascii/**/*.txt", { eager: true, as: 'url' });
export const AsciiPool: Record<string, string> = {};

for (const path in rawAscii) {
  const parts = path.split('/');
  const fileName = parts[parts.length - 1].replace('.txt', '');
  AsciiPool[fileName] = rawAscii[path] as string;
}

export function useGame() {
  const [currentID, setCurrentId] = useState("Start"); 
  const [inventory, setInventory] = useState<string[]>([]);

  const rawEncounter = EncounterPool[currentID] || EncounterPool["ErrorCodeTwine"];
  const encounter = rawEncounter ? {
    ...rawEncounter,
    asciiUrl: AsciiPool[rawEncounter.asciiUrl] || rawEncounter.asciiUrl
  } : null;
  
  function chooseOption(nextId: string) {
    setCurrentId(nextId);
  }

  return { encounter, chooseOption, inventory, setInventory };
}