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

export const PokedexGroupWriter = {
  pokedexMasteryHashs: [] as string[],

  writePokedexChapters: (print?: (msg: string) => void): Record<string, string> => {
    if (print) print("\n-=-=-=-=-=-=-=-=-=-=- WRITING COLLECTION-BASED QUESTS -=-=-=-=-=-=-=-=-=-=-");
    
    let generatedFiles: Record<string, string> = {};

    for (const region of NationalDex.REGION_NAMES) {
      let idx = ExportUtils.indexOf(NationalDex.REGION_NAMES, region);
      generatedFiles[`generation_${ExportUtils.ROMAN_NUMERALS[idx]}.snbt`] = PokedexGroupWriter.writePokedexChapter(idx, ItemDict.BALLS[idx]);
      if (print) print(`Generation ${idx + 1} Formatted!`);
    }

    generatedFiles["generational_legend.snbt"] = PokedexGroupWriter.writePokedexMasteryChapter();
    return generatedFiles;
  },

  writePokedexChapter: (genNum: number, iconName: string): string => {
    let snbt = "{\n";
    let questHashs = PokedexGroupWriter.questHashsOfGen(genNum);

    snbt += PokedexGroupWriter.writePokedexChapterHeader(ExportUtils.ROMAN_NUMERALS[genNum], genNum, iconName);
    snbt += "\tquest_links: [\n";
    snbt += PokedexGroupWriter.writePokedexQuestLinks(questHashs);
    snbt += "\t]\n";
    snbt += "\tquests: [\n";
    snbt += PokedexGroupWriter.writePokedexCompletionQuests(genNum, NationalDex.REGION_NAMES[genNum]);
    snbt += "\t]\n}\n";
    
    return snbt;
  },

  questHashsOfGen: (genNum: number): string[] => {
    let questHashs: string[] = [];
    for (let i = NationalDex.GEN_DEX_BOUNDS[genNum][0]; i < NationalDex.GEN_DEX_BOUNDS[genNum][1]; i++) {
      let questHash = NationalDex.getHashByDex(i);
      if (questHash) questHashs.push(questHash);
    }
    return questHashs;
  },

  writePokedexChapterHeader: (romanNum: string, genNum: number, iconName: string): string => {
    let idHash = String(Math.abs(hashCode("generation" + genNum)));
    let snbt = "";
    snbt += "\tdefault_hide_dependency_lines: false\n";
    snbt += "\tdefault_quest_shape: \"\"\n";
    snbt += `\tfilename: "generation_${romanNum}"\n`;
    snbt += `\tgroup: "${GroupDataWriter.getChapterHash("pokedex")}"\n`;
    snbt += `\ttitle: "Generation ${romanNum.toUpperCase()}"\n`;
    snbt += `\ticon: "cobblemon:${iconName}_ball"\n`;
    snbt += `\t\ticon: {\n\t\t\tid: "cobblemon:${iconName}_ball"\n\t\t}\n`;
    snbt += `\tid: "${idHash}"\n`;
    snbt += `\torder_index: ${genNum}\n`;
    return snbt;
  },

  writePokedexQuestLinks: (questHashs: string[]): string => {
    let coords: number[] = [1.0, 1.0];
    let snbt = "";
    for (let hash of questHashs) {
      snbt += "\t{\n";
      snbt += PokedexGroupWriter.writePokedexQuestLink(hash, coords);
      snbt += "\t}\n";
      coords = ExportUtils.nextQuadCoords(coords);
    }
    return snbt;
  },

  writePokedexQuestLink: (hash: string, coords: number[]): string => {
    let idHash = String(Math.abs(hashCode(hash + coords[0] + coords[1])));
    let snbt = "";
    snbt += `\t\tid: "${idHash}"\n`;
    snbt += `\t\tlinked_quest: "${hash}"\n`;
    snbt += `\t\tx: ${coords[0]}d\n`;
    snbt += `\t\ty: ${coords[1]}d\n`;
    return snbt;
  },

  writePokedexCompletionQuests: (genNum: number, regionName: string): string => {
    let dependencies = PokedexGroupWriter.pokedexCompletionDependencies(genNum);
    let questTypes = ["Master", "Legend"];
    let iconNames = ["cobblemon:master_ball", "minecraft:netherite_scrap"];
    let coords: number[] = [10.0, 5.0];
    let snbt = "";

    for (let i = 0; i < questTypes.length; i++) {
      snbt += "\t{\n";
      snbt += PokedexGroupWriter.writePokedexCompletionQuest(dependencies[i], regionName, questTypes[i], iconNames[i], coords);
      snbt += "\t}\n";
      coords[1] += 5.0;
    }
    return snbt;
  },

  pokedexCompletionDependencies: (genNum: number): string[][] => {
    let dependencies: string[][] = [];
    dependencies[1] = PokedexGroupWriter.generationLegendHashs(genNum);
    dependencies[0] = PokedexGroupWriter.generationMasterHashs(genNum, dependencies[1]);
    return dependencies;
  },

  generationLegendHashs: (genNum: number): string[] => {
    let legendHashs: string[] = [];
    if (NationalDex.LEGEND_DEXES[genNum]) {
      for (let legendDex of NationalDex.LEGEND_DEXES[genNum]) {
        let hash = NationalDex.getHashByDex(legendDex);
        if (hash) legendHashs.push(hash);
      }
    }
    return legendHashs;
  },

  generationMasterHashs: (genNum: number, legendHashs: string[]): string[] => {
    let masterHashs: string[] = [];
    for (let hash of PokedexGroupWriter.questHashsOfGen(genNum)) {
      if (ExportUtils.indexOf(legendHashs, hash) === -1) {
        masterHashs.push(hash);
      }
    }
    return masterHashs;
  },

  writePokedexCompletionQuest: (dependencies: string[], regionName: string, questType: string, iconName: string, coords: number[]): string => {
    let rewardsTable = PokedexGroupWriter.pokedexCompletionRewardsTable(questType);
    let idHash = String(Math.abs(hashCode(regionName + questType)));
    PokedexGroupWriter.pokedexMasteryHashs.push(idHash);

    let snbt = "";
    snbt += "\t\tdependencies: [\n";
    snbt += PokedexGroupWriter.writePokedexCompletionDependencies(dependencies);
    snbt += "\t\t]\n";
    snbt += `\t\ticon: "${iconName}"\n`;
    snbt += `\t\ticon: {\n\t\t\tid: "${iconName}"\n\t\t}\n`;
    snbt += `\t\tid: "${idHash}"\n`;
    snbt += "\t\trewards: [\n";
    snbt += PokedexGroupWriter.writePokedexCompletionRewards(rewardsTable, regionName);
    snbt += "\t\t]\n";
    snbt += "\t\tshape: \"diamond\"\n";
    snbt += `\t\ttitle: "${regionName} ${questType}"\n`;
    snbt += `\t\tx: ${coords[0]}\n`;
    snbt += `\t\ty: ${coords[1]}\n`;
    return snbt;
  },

  pokedexCompletionRewardsTable: (questType: string): Record<string, number> => {
    let rewardsTable: Record<string, number> = {};
    if (questType === "Master") {
      rewardsTable["minecraft:iron_block"] = 10;
      rewardsTable["cobblemon:master_ball"] = 1;
      rewardsTable["cobblemon:full_restore"] = 5;
      rewardsTable["cobblemon:rare_candy"] = 15;
      rewardsTable["cobblemon:pp_up"] = 5;
      rewardsTable["cobblemon:berry_juice"] = 1;
    } else {
      rewardsTable["minecraft:netherite_block"] = 1;
      rewardsTable["cobblemon:ultra_ball"] = 15;
      rewardsTable["cobblemon:max_revive"] = 10;
      rewardsTable["cobblemon:rare_candy"] = 15;
      rewardsTable["cobblemon:pp_max"] = 1;
      rewardsTable["cobblemon:roasted_leek"] = 1;
      rewardsTable["cobblemon:leek_and_potato_stew"] = 1;
      rewardsTable["cobblemon:braised_vivichoke"] = 1;
      rewardsTable["cobblemon:vivichoke_dip"] = 1;
      rewardsTable["cobblemon:berry_juice"] = 1;
    }
    return rewardsTable;
  },

  writePokedexCompletionDependencies: (dependencies: string[]): string => {
    let snbt = "";
    for (let dep of dependencies) {
      snbt += `\t\t\tid: "${dep}"\n`;
    }
    let masteryLen = PokedexGroupWriter.pokedexMasteryHashs.length;
    if (masteryLen % 2 === 0) {
      snbt += `\t\t\tid: "${PokedexGroupWriter.pokedexMasteryHashs[masteryLen - 2]}"\n`;
    }
    return snbt;
  },

  writePokedexCompletionRewards: (rewardsTable: Record<string, number>, regionName: string): string => {
    let snbt = "";
    for (const [key, value] of Object.entries(rewardsTable)) {
      let idHash = String(Math.abs(hashCode(regionName + key + value)));
      snbt += "\t\t\t{\n";
      snbt += `\t\t\t\tcount: ${value}\n`;
      snbt += `\t\t\t\tid: "${idHash}"\n`;
      snbt += `\t\t\t\titem: "${key}"\n`;
      snbt += "\t\t\t\ttype: \"item\"\n";
      snbt += "\t\t\t}\n";
    }
    return snbt;
  },

  writePokedexMasteryChapter: (): string => {
    let snbt = "{\n";
    snbt += PokedexGroupWriter.writePokedexMasteryChapterHeader();
    snbt += "\tquest_links: [\n";
    snbt += PokedexGroupWriter.writePokdexMasteryLinks(PokedexGroupWriter.pokedexMasteryHashs);
    snbt += "\t]\n";
    snbt += "\tquests: [\n\t\t{\n";
    snbt += PokedexGroupWriter.writePokdexMasteryQuest();
    snbt += "\t\t}\n\t]\n}\n";
    return snbt;
  },

  writePokedexMasteryChapterHeader: (): string => {
    let idHash = String(Math.abs(hashCode("generationalLegendChapter")));
    let snbt = "";
    snbt += "\tdefault_hide_dependency_lines: header\n";
    snbt += "\tdefault_quest_shape: \"\"\n";
    snbt += "\tfilename: \"generational_legend\"\n";
    snbt += `\tgroup: "${GroupDataWriter.getChapterHash("pokedex")}"\n`;
    snbt += "\ttitle: \"Generational Legend\"\n";
    snbt += "\ticon: \"cobblemon:master_ball\"\n";
    snbt += `\t\ticon: {\n\t\t\tid: "cobblemon:master_ball"\n\t\t}\n`;
    snbt += `\tid: "${idHash}"\n`;
    snbt += `\torder_index: ${NationalDex.REGION_NAMES.length}\n`;
    return snbt;
  },

  writePokdexMasteryLinks: (questHashs: string[]): string => {
    let coords: number[] = [1.0, 1.0];
    let snbt = "";
    for (let hash of questHashs) {
      snbt += "\t{\n";
      snbt += PokedexGroupWriter.writePokdexMasteryLink(hash, coords);
      snbt += "\t}\n";
      if (coords[1] === 2.0) { coords[0] += 1; }
      coords[1] = (coords[1] === 2.0) ? 1.0 : 2.0;
    }
    return snbt;
  },

  writePokdexMasteryLink: (hash: string, coords: number[]): string => {
    let idHash = String(Math.abs(hashCode(hash + Math.abs(hashCode(coords.join(","))))));
    let snbt = "";
    snbt += `\t\tid: "${idHash}"\n`;
    snbt += `\t\tlinked_quest: "${hash}"\n`;
    snbt += `\t\tx: ${coords[0]}d\n`;
    snbt += `\t\ty: ${coords[1]}d\n`;
    return snbt;
  },

  writePokedexMasteryDependencies: (questHashs: string[]): string => {
    let snbt = "";
    for (let hash of questHashs) {
      snbt += `\t\t\t\t"${hash}"\n`;
    }
    return snbt;
  },

  writePokdexMasteryQuest: (): string => {
    let rewardsTable = PokedexGroupWriter.pokedexMasteryRewardsTable();
    let idHash = String(Math.abs(hashCode("generationalLegendQuest")));
    let snbt = "";
    snbt += "\t\t\tdependencies: [\n";
    snbt += PokedexGroupWriter.writePokedexMasteryDependencies(PokedexGroupWriter.pokedexMasteryHashs);
    snbt += "\t\t\t]\n";
    snbt += "\t\t\ticon: \"cobblemon:master_ball\"\n";
    snbt += `\t\ticon: {\n\t\t\tid: "cobblemon:master_ball"\n\t\t}\n`;
    snbt += `\t\t\tid: "${idHash}"\n`;
    snbt += `\t\t\tmin_required_dependencies: ${PokedexGroupWriter.pokedexMasteryHashs.length}\n`;
    snbt += "\t\t\trewards: [\n";
    snbt += PokedexGroupWriter.writePokdexMasteryRewards(rewardsTable);
    snbt += "\t\t\t]\n";
    snbt += "\t\t\tshape: \"diamond\"\n";
    snbt += "\t\t\ttitle: \"Generational Legend\"\n";
    snbt += "\t\t\tx: 5\n";
    snbt += "\t\t\ty: 0\n";
    return snbt;
  },

  pokedexMasteryRewardsTable: (): Record<string, number> => {
    let rewardsTable: Record<string, number> = {};
    rewardsTable["minecraft:netherite_block"] = 9;
    rewardsTable["minecraft:nether_star"] = 9;
    rewardsTable["minecraft:dragon_egg"] = 1;
    rewardsTable["cobblemon:ultra_ball"] = 45;
    rewardsTable["cobblemon:max_revive"] = 90;
    rewardsTable["cobblemon:rare_candy"] = 45;
    rewardsTable["cobblemon:pp_max"] = 9;
    rewardsTable["cobblemon:roasted_leek"] = 9;
    rewardsTable["cobblemon:leek_and_potato_stew"] = 9;
    rewardsTable["cobblemon:braised_vivichoke"] = 9;
    rewardsTable["cobblemon:vivichoke_dip"] = 9;
    rewardsTable["cobblemon:berry_juice"] = 9;
    return rewardsTable;
  },

  writePokdexMasteryRewards: (rewardsTable: Record<string, number>): string => {
    let snbt = "";
    for (const [key, value] of Object.entries(rewardsTable)) {
      let idHash = String(Math.abs(hashCode(key + value + "Mastery")));
      snbt += "\t\t\t{\n";
      snbt += `\t\t\t\tcount: ${value}\n`;
      snbt += `\t\t\t\tid: "${idHash}"\n`;
      snbt += `\t\t\t\titem: "${key}"\n`;
      snbt += "\t\t\t\ttype: \"item\"\n";
      snbt += "\t\t\t}\n";
    }
    return snbt;
  }
};