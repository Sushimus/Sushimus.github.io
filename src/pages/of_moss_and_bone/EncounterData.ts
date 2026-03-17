export type OptionData = {
  text: string;
  nextId: string;
};

export type EncounterData = {
  head: string;
  asciiUrl: string;
  content: string;
  options: OptionData[];
};

const modules = import.meta.glob('./encounters/*.ts', { eager: true });
export const Encounters: Record<string, EncounterData> = {};
for (const path in modules) {
  const id = path.split('/').pop()?.replace('.ts', '') || "";
  const mod = modules[path] as { default: EncounterData };
  
  if (id && mod.default) {
    Encounters[id] = mod.default;
  }
}

if (!Encounters["start"]) {
  Encounters["Encounters Folder 404"] = {
    head: "The Adventure Vanished",
    asciiUrl: "",
    content: "Somehow even the folder to hold the encounters is lost. Amazing. Try reloading the page?",
    options: []
  };
}