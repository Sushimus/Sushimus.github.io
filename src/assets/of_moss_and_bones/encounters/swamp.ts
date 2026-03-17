import type { EncounterData } from "../../../pages/of_moss_and_bone/EncounterData";

export const swampData: Record<string, EncounterData> = {
  swamp_start: {
    head: "Stinky Swamp",
    asciiUrl: "swamp",
    content: "Water green. Smell bad. Big frog look at you.",
    options: [
      { text: "Poke Frog", nextId: "frog_bite" },
      { text: "Walk Away", nextId: "start" }
    ]
  },
  frog_bite: {
    head: "Ouch",
    asciiUrl: "frog",
    content: "Frog have big teeth. Bite finger. You run away crying.",
    options: [
      { text: "Go Back", nextId: "start" }
    ]
  }
};