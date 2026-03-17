// Simple hash function to mimic Java's String.hashCode()
const hashCode = (str: string): number => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const GroupDataWriter = {
  chapterTitleLookup: {
    "pokedex": "Gotta Catch 'em All!",
    "type": "Specialty Safari"
  } as Record<string, string>,

  getChapterTitle: (chapter: string): string => {
    return GroupDataWriter.chapterTitleLookup[chapter];
  },

  titleHashLookup: {
    "Gotta Catch 'em All!": String(Math.abs(hashCode("Gotta Catch 'em All!"))),
    "Specialty Safari": String(Math.abs(hashCode("Specialty Safari")))
  } as Record<string, string>,

  getChapterHash: (chapter: string): string => {
    const title = GroupDataWriter.getChapterTitle(chapter);
    return GroupDataWriter.titleHashLookup[title];
  },

  orderedChapterTitleLookup: {
    0: "Gotta Catch 'em All!",
    1: "Specialty Safari"
  } as Record<number, string>,

  orderedTitleHashLookup: {
    0: String(Math.abs(hashCode("Gotta Catch 'em All!"))),
    1: String(Math.abs(hashCode("Specialty Safari")))
  } as Record<number, string>,

  writeChapterGroups: (chapters: string[], print?: (msg: string) => void): { chapterGroups: string, data: string } => {
    if (print) print("\n-=-=-=-=-=-=-=-=-=-=- WRITING CHAPTER GROUPS -=-=-=-=-=-=-=-=-=-=-");
    
    let snbt = "{\n\tchapter_groups: [\n";
    for (const chapter of chapters) {
      snbt += `\t\t{ id: "${GroupDataWriter.getChapterHash(chapter)}", title: "${GroupDataWriter.getChapterTitle(chapter)}" }\n`;
    }
    snbt += "\t]\n}\n";

    if (print) print("Chapter-Grouping Formatted! (Mocked writing to chapter_groups.snbt)");
    
    const dataSnbt = GroupDataWriter.writeChapterGroupsData(print);
    return { chapterGroups: snbt, data: dataSnbt };
  },

  writeChapterGroupsData: (print?: (msg: string) => void): string => {
    let snbt = "{\n";
    snbt += "\tdefault_autoclaim_rewards: \"enabled\"\n";
    snbt += "\tdefault_consume_items: false\n";
    snbt += "\tdefault_quest_disable_jei: false\n";
    snbt += "\tdefault_quest_shape: \"circle\"\n";
    snbt += "\tdefault_reward_team: false\n";
    snbt += "\tdetection_delay: 20\n";
    snbt += "\tdisable_gui: false\n";
    snbt += "\tdrop_loot_crates: false\n";
    snbt += "\temergency_items_cooldown: 300\n";
    snbt += "\tgrid_scale: 0.5d\n";
    snbt += "\ticon: \"cobblemon:poke_ball\"\n";
    snbt += "\tlock_message: \"\"\n";
    snbt += "\tloot_crate_no_drop: {\n";
    snbt += "\t\tboss: 0\n";
    snbt += "\t\tmonster: 600\n";
    snbt += "\t\tpassive: 4000\n";
    snbt += "\t}\n";
    snbt += "\tpause_game: false\n";
    snbt += "\tprogression_mode: \"linear\"\n";
    snbt += "\ttitle: \"Cobblemon\"\n";
    snbt += "\tversion: 13\n";
    snbt += "}\n";

    if (print) print("Chapter-Grouping Data Formatted! (Mocked writing to data.snbt)");
    return snbt;
  }
};