import { ExportUtils } from './ExportUtils';
import { NationalDex } from './NationalDex';
import { ItemDict } from './ItemDict';
import { GroupDataWriter } from './GroupDataWriter';


const hashCode = (str: string): number => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  return hash;
};


export const TypeGroupWriter = {
  POKE_TYPES: [ "fighting", "dark", "fire", "dragon", "fairy", "rock", "electric", "steel", "grass",
                "water", "ice", "normal", "poison", "flying", "bug", "ground", "ghost", "psychic" ],
  TYPE_ADJECTIVES: [ "fury", "dominion", "fervor", "horde", "frolic", "rumble", "mania", "squadron", "gala",
                     "wave", "invasion", "meeting", "persuasion", "flock", "frenzy", "gauntlet", "gathering", "spectacle" ],

  writeTypeChapters: (print?: (msg: string) => void): Record<string, string> => {
    if (print) print("\n-=-=-=-=-=-=-=-=-=-=- WRITING TYPE-BASED QUESTS -=-=-=-=-=-=-=-=-=-=-");
    let files: Record<string, string> = {};
    for (let type of TypeGroupWriter.POKE_TYPES) {
      files[`type_${type}_collection.snbt`] = TypeGroupWriter.writeTypeChapter(type);
      if (print) print(`${type.charAt(0).toUpperCase() + type.slice(1)} Type Formatted!`);
    }

    return files;
  },


  writeTypeChapter: (type: string): string => {
    let typeIdx = ExportUtils.indexOf(TypeGroupWriter.POKE_TYPES, type);
    let camelType = TypeGroupWriter.POKE_TYPES[typeIdx].charAt(0).toUpperCase() + TypeGroupWriter.POKE_TYPES[typeIdx].slice(1);
    let camelAdj = TypeGroupWriter.TYPE_ADJECTIVES[typeIdx].charAt(0).toUpperCase() + TypeGroupWriter.TYPE_ADJECTIVES[typeIdx].slice(1);

    let questHashs = TypeGroupWriter.questHashsOfType(camelType);
   
    let snbt = "{\n";
    snbt += TypeGroupWriter.writeTypeChapterHeader(type, camelType, camelAdj, typeIdx);
    snbt += "\tquest_links: [\n";
    snbt += TypeGroupWriter.writeTypeQuestLinks(questHashs, camelType, camelAdj);
    snbt += "\t]\n";
    snbt += "\tquests: [\n";
    snbt += TypeGroupWriter.writeTypeProgressionQuests(questHashs, camelType, camelAdj);
    snbt += "\t]\n}\n";

    return snbt;
  },

  questHashsOfType: (type: string): string[] => {
    let hashs: string[] = [];
    for (let i = 1; i <= 1025; i++) {
      let hash = NationalDex.getHashByDex(i);
      let types = NationalDex.getTypesByDex(i) || [];
      if (hash && ExportUtils.indexOf(types, type) !== -1) {
        hashs.push(hash);
      }
    }

    return hashs;
  },


  writeTypeChapterHeader: (type: string, camelType: string, camelAdj: string, typeIdx: number): string => {
    let idHash = String(Math.abs(hashCode(type + camelAdj)));
    let snbt = "";
    snbt += "\tdefault_hide_dependency_lines: false\n";
    snbt += "\tdefault_quest_shape: \"\"\n";
    snbt += `\tfilename: "type_${type}_collection"\n`;
    snbt += `\tgroup: "${GroupDataWriter.getChapterHash("type")}"\n`;
    snbt += `\ttitle: "${camelType} ${camelAdj}"\n`;
    snbt += `\ticon: "cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}"\n`;
    snbt += `\t\ticon: {\n\t\t\tid: "cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}"\n\t\t}\n`;
    snbt += `\tid: "${idHash}"\n`;
    snbt += `\torder_index: ${typeIdx}\n`;

    return snbt;
  },


  writeTypeQuestLinks: (questHashs: string[], type: string, typeAdj: string): string => {
    let coords: number[] = [1.0, 1.0];
    let snbt = "";
    for (let hash of questHashs) {
      snbt += "\t{\n";
      snbt += TypeGroupWriter.writeTypeQuestLink(hash, type, typeAdj, coords);
      snbt += "\t}\n";
      coords = ExportUtils.nextQuadCoords(coords);
    }

    return snbt;
  },


  writeTypeQuestLink: (hash: string, type: string, typeAdj: string, coords: number[]): string => {
    let idHash = String(Math.abs(hashCode(hash + type + typeAdj)));
    let snbt = "";
    snbt += `\t\tid: "${idHash}"\n`;
    snbt += `\t\tlinked_quest: "${hash}"\n`;
    snbt += `\t\tx: ${coords[0]}d\n`;
    snbt += `\t\ty: ${coords[1]}d\n`;

    return snbt;
  },


  writeTypeProgressionQuests: (questHashs: string[], type: string, typeAdj: string): string => {
    let coords: number[] = [10.0, 1.0];
    let snbt = "";
    let prevIDHash: string = "";
    let currentHashs = [...questHashs];

    for (let i = 0; i < 5; i++) {
      snbt += "\t\t\t{\n";
      let result = TypeGroupWriter.writeTypeProgressionQuest(currentHashs, type, typeAdj, i, coords);
      snbt += result.snbt;
      snbt += "\t\t\t}\n";
      prevIDHash = result.idHash;

      currentHashs.push(prevIDHash);
      coords[1] += 2.0;
    }

    return snbt;
  },


  writeTypeProgressionQuest: (questHashs: string[], type: string, typeAdj: string, progressIdx: number, coords: number[]): { snbt: string, idHash: string } => {
    let minDependents = Math.floor(questHashs.length / 5) * (progressIdx + 1) + progressIdx;
    let typeIdx = ExportUtils.indexOf(TypeGroupWriter.POKE_TYPES, type.toLowerCase());
    let rewardsTable = TypeGroupWriter.typeProgressionRewardsTable(typeIdx, progressIdx);

    let idHash = String(Math.abs(hashCode(type + typeAdj + "Progression" + ExportUtils.ROMAN_NUMERALS[progressIdx])));
    let snbt = "";

    snbt += "\t\t\t\tdependencies: [\n";
    for (let hash of questHashs) {
      snbt += `\t\t\t\t\t"${hash}"\n`;
    }

    snbt += "\t\t\t\t]\n";
    snbt += `\t\t\t\ticon: "cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}"\n`;
    snbt += `\t\ticon: {\n\t\t\tid: "cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}"\n\t\t}\n`;
    snbt += `\t\t\t\tid: "${idHash}"\n`;
    snbt += `\t\t\t\tmin_required_dependencies: ${minDependents}\n`;
    snbt += "\t\t\t\trewards: [\n";
    snbt += TypeGroupWriter.writeTypeProgressionRewards(rewardsTable);
    snbt += "\t\t\t\t]\n";
    snbt += "\t\t\t\tshape: \"diamond\"\n";
    snbt += `\t\t\t\ttitle: "${type} ${typeAdj} ${ExportUtils.ROMAN_NUMERALS[progressIdx].toUpperCase()}"\n`;
    snbt += `\t\t\t\tx: ${coords[0]}\n`;
    snbt += `\t\t\t\ty: ${coords[1]}\n`;

    return { snbt, idHash };
  },


  typeProgressionRewardsTable: (typeIdx: number, progressIdx: number): Record<string, number> => {
    let rewardsTable: Record<string, number> = {};
    let statLen = ItemDict.STAT_RAISERS.length;
    let healLen = ItemDict.STATUS_HEALERS.length;
    let modLen = ItemDict.STAT_MODIFIERS.length;

    switch (progressIdx) {
      case 0:
        rewardsTable[`cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}`] = 1;
        rewardsTable[`cobblemon:${ItemDict.STAT_RAISERS[(typeIdx + progressIdx) % statLen]}`] = 1;
        rewardsTable[`cobblemon:${ItemDict.STATUS_HEALERS[(typeIdx + progressIdx) % healLen]}`] = 1;
        rewardsTable["cobblemon:potion"] = 2;
        break;
      case 1:
        rewardsTable[`cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}`] = 1;
        rewardsTable[`cobblemon:${ItemDict.STAT_RAISERS[(typeIdx + progressIdx) % statLen]}`] = 2;
        rewardsTable[`cobblemon:${ItemDict.STATUS_HEALERS[(typeIdx + progressIdx) % healLen]}`] = 2;
        rewardsTable["cobblemon:potion"] = 4;
        break;
      case 2:
        rewardsTable[`cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}`] = 1;
        rewardsTable[`cobblemon:${ItemDict.STAT_RAISERS[(typeIdx + progressIdx) % statLen]}`] = 3;
        rewardsTable[`cobblemon:${ItemDict.STATUS_HEALERS[(typeIdx + progressIdx) % healLen]}`] = 3;
        rewardsTable["cobblemon:potion"] = 6;
        break;
      case 3:
        rewardsTable[`cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}`] = 1;
        rewardsTable[`cobblemon:${ItemDict.STAT_RAISERS[(typeIdx + progressIdx) % statLen]}`] = 4;
        rewardsTable[`cobblemon:${ItemDict.STATUS_HEALERS[(typeIdx + progressIdx) % healLen]}`] = 4;
        rewardsTable[`cobblemon:${ItemDict.STAT_MODIFIERS[(typeIdx + progressIdx) % modLen]}`] = 1;
        rewardsTable["cobblemon:super_potion"] = 3;
        break;
      case 4:
        rewardsTable[`cobblemon:${ItemDict.TYPE_BOOSTERS[typeIdx]}`] = 2;
        rewardsTable[`cobblemon:${ItemDict.STAT_RAISERS[(typeIdx + progressIdx) % statLen]}`] = 5;
        rewardsTable[`cobblemon:${ItemDict.STATUS_HEALERS[(typeIdx + progressIdx) % healLen]}`] = 5;
        rewardsTable[`cobblemon:${ItemDict.STAT_MODIFIERS[(typeIdx + progressIdx) % modLen]}`] = 2;
        rewardsTable["cobblemon:super_potion"] = 6;
        break;
    }

    return rewardsTable;
  },


  writeTypeProgressionRewards: (rewardsTable: Record<string, number>): string => {
    let snbt = "";
    for (const [key, value] of Object.entries(rewardsTable)) {
      let idHash = String(Math.abs(hashCode(key + value + "Mastery")));
      snbt += "\t\t\t\t\t{\n";
      snbt += `\t\t\t\t\t\tcount: ${value}\n`;
      snbt += `\t\t\t\t\t\tid: "${idHash}"\n`;
      snbt += `\t\t\t\t\t\titem: "${key}"\n`;
      snbt += "\t\t\t\t\t\ttype: \"item\"\n";
      snbt += "\t\t\t\t\t}\n";
    }

    return snbt;
  }
}; 