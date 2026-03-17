import { ExportUtils } from './ExportUtils';
import { ItemDict } from './ItemDict';

const hashCode = (str: string): number => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};

export const NationalDex = {
  MASTER_DEX_FILE: "master_national_dex.txt",
  DEX_FILE: "national_dex.txt",
  REGION_NAMES: [ "Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea" ],
  GEN_DEX_BOUNDS: [
    [1, 151], [152, 251], [252, 386], [387, 493], [494, 649], [650, 721], [722, 809], [810, 905], [906, 1025]
  ],
  LEGEND_DEXES: [
    [144, 145, 146, 150, 151],
    [243, 244, 245, 249, 250, 251],
    [377, 378, 379, 380, 381, 382, 383, 384, 385, 386],
    [480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493],
    [494, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649],
    [716, 717, 718, 719, 720, 721],
    [785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809],
    [888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 905],
    [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1014, 1015, 1016, 1017, 1020, 1021, 1022, 1023, 1024, 1025]
  ],

  questHashLookupTable: {} as Record<string, string>,
  cobblemonLookupTable: {} as Record<string, string>,
  typeLookupTable: {} as Record<string, string[]>,

  createNationalDexCopy: (print?: (msg: string) => void): void => {
    if(print) print("Mock: Copying master dex to national dex...");
  },

  reset: (print: ((msg: string) => void) | false, masterDexContent: string): string => {
    if(print) print("\n-=-=-=-=-=-=-=-=-=-=- NATIONAL DEX INITIALISATION -=-=-=-=-=-=-=-=-=-=-");
    NationalDex.createNationalDexCopy(print || undefined);
    NationalDex.lookupTablesInit(masterDexContent);
    const snbt = NationalDex.writeChapter(masterDexContent);
    if(print) print("National Dex Created!");
    return snbt;
  },

  filteredReset: (print: ((msg: string) => void) | false, masterDexContent: string, filteredContent: string): string => {
    if(print) print("\n-=-=-=-=-=-=-=-=-=-=- NATIONAL DEX INITIALISATION -=-=-=-=-=-=-=-=-=-=-");
    NationalDex.createNationalDexCopy(print || undefined);
    NationalDex.lookupTablesInit(masterDexContent);
    if(print) print("Mock: Running NationalDexFilter...");
    const snbt = NationalDex.writeChapter(filteredContent || masterDexContent);
    if(print) print("National Dex Created!");
    return snbt;
  },

  lookupTablesInit: (masterDexContent: string = ""): void => {
    NationalDex.questHashLookupTable = {};
    const lines = masterDexContent.split("\n").filter(l => l.trim() !== "");
    
    for (const line of lines) {
      const parts = line.split(",").map(p => p.trim());
      NationalDex.cobblemonLookupTable[parts[0]] = parts[1];
      
      if (parts.length === 3) {
        NationalDex.typeLookupTable[parts[1]] = [parts[2]];
      } else if (parts.length === 4) {
        NationalDex.typeLookupTable[parts[1]] = [parts[2], parts[3]];
      } else {
        console.error(`ERROR: Unexpected number of types for Cobblemon: ${parts[1]}.`);
      }
    }
  },

  writeChapter: (dexContent: string = ""): string => {
    let snbt = "{\n";
    snbt += NationalDex.writeChapterHeader();
    snbt += "\tquests: [\n";
    snbt += NationalDex.writeQuests(dexContent);
    snbt += "\t]\n}\n";
    return snbt;
  },

  writeChapterHeader: (): string => {
    let idHash = String(Math.abs(hashCode("national_dex")));
    let header = "";
    header += "\talways_invisible: true\n";
    header += "\tdefault_hide_dependency_lines: true\n";
    header += "\tdefault_quest_shape: \"\"\n";
    header += "\tfilename: \"national_dex\"\n";
    header += "\tgroup: \"\"\n";
    header += "\ttitle: \"National Dex\"\n";
    header += "\ticon: \"cobblemon:poke_ball\"\n";
    header += "\tid: \"" + idHash + "\"\n";
    header += "\torder_index: 0\n";
    header += "\tquest_links: [ ]\n";
    return header;
  },

  writeQuests: (dexContent: string): string => {
    let questsSnbt = "";
    const lines = dexContent.split("\n").filter(l => l.trim() !== "");
    let coords: number[] = [1.0, 1.0];
    let genIdx = 0;

    for (const line of lines) {
      const dexNumber = parseInt(line.split(",")[0], 10);
      if (NationalDex.GEN_DEX_BOUNDS[genIdx] && NationalDex.GEN_DEX_BOUNDS[genIdx][1] < dexNumber) {
        genIdx += 1;
      }

      const iconName = ItemDict.BALLS[genIdx] || "poke";
      const qInfos = NationalDex.questStrings(line, iconName, genIdx, dexNumber);
      
      questsSnbt += "\t{\n";
      questsSnbt += NationalDex.writeQuest(qInfos, coords);
      questsSnbt += "\t}\n";

      coords[0] = ((coords[0] + 1) % 10.0 <= 0.1) ? 1.0 : coords[0] + 1.0;
      if (coords[0] <= 1.1) { coords[1] += 1.0; }
    }
    return questsSnbt;
  },

  questStrings: (line: string, iconName: string, genNum: number, pokeIdx: number): string[] => {
    const parts = line.split(",").map(p => p.trim());
    const questInfos: string[] = new Array(4);
    
    questInfos[0] = parts[1];//name
    questInfos[1] = ExportUtils.formatName(questInfos[0]);//entity name
    questInfos[2] = parts[0];//id
    questInfos[3] = iconName;//icon

    if (NationalDex.LEGEND_DEXES[genNum]) {
      for (let i = 0; i < NationalDex.LEGEND_DEXES[genNum].length; i++) {
        if (pokeIdx === NationalDex.LEGEND_DEXES[genNum][i]) {
          questInfos[3] = "master";
          break;
        }
      }
    }
    return questInfos;
  },

  writeQuest: (questInfos: string[], coords: number[]): string => {
    let idHashRaw = "obtain" + questInfos[2];
    let idHash = String(Math.abs(hashCode(idHashRaw)));
    NationalDex.questHashLookupTable[parseInt(questInfos[2], 10)] = idHash;

    let questBlock = "";
    questBlock += NationalDex.writeTask(questInfos);
    questBlock += "\t\ttitle: \"-=[ " + questInfos[2] + " ]=-\\\\n" + questInfos[0] + "\"\n";
    questBlock += "\t\ticon: \"cobblemon:" + questInfos[3] + "_ball\"\n";
    questBlock += "\t\tid: \"" + idHash + "\"\n";
    questBlock += "\t\tx: " + coords[0] + "d\n";
    questBlock += "\t\ty: " + coords[1] + "d\n";
    return questBlock;
  },

  writeTask: (questInfos: string[]): string => {
    let idHashRaw = "obtainTask" + questInfos[2];
    let idHash = String(Math.abs(hashCode(idHashRaw)));

    let taskBlock = "";
    taskBlock += "\t\ttasks: [{\n";
    taskBlock += "\t\t\taction: \"obtain\"\n";
    taskBlock += "\t\t\tentity: \"cobblemon:" + questInfos[1] + "\"\n";
    taskBlock += "\t\t\tform: \"choice_any\"\n";
    taskBlock += "\t\t\tgender: \"choice_any\"\n";
    taskBlock += "\t\t\ticon: \"cobblemon:poke_ball\"\n";
    taskBlock += "\t\t\tid: \"" + idHash + "\"\n";
    taskBlock += "\t\t\tpokemon_type: \"choice_any\"\n";
    taskBlock += "\t\t\tregion: \"choice_any\"\n";
    taskBlock += "\t\t\tshiny: false\n";
    taskBlock += "\t\t\ttype: \"cobblemon_tasks:cobblemon_task\"\n";
    taskBlock += "\t\t\tvalue: 1L\n";
    taskBlock += "\t\t}]\n";
    return taskBlock;
  },

  getCobblemonByDex: (dexNumber: string | number): string | null => {
    const pkm = NationalDex.cobblemonLookupTable[String(dexNumber)];
    if (!pkm) console.error(`ERROR: ${dexNumber} not in cobblemonLookupTable.`);
    return pkm || null;
  },

  getTypesByCobblemon: (cobblemon: string): string[] | null => {
    const types = NationalDex.typeLookupTable[cobblemon];
    if (!types) console.error(`ERROR: ${cobblemon} not in typeLookupTable.`);
    return types || null;
  },

  getTypesByDex: (dexNumber: number | string): string[] | null => {
    const dexString = String(dexNumber).padStart(4, "0");
    const pkm = NationalDex.getCobblemonByDex(dexString);
    if (!pkm) return null;
    return NationalDex.getTypesByCobblemon(pkm);
  },

  getHashByDex: (dexNumber: number | string): string => {
    return NationalDex.questHashLookupTable[String(dexNumber)];
  }
};