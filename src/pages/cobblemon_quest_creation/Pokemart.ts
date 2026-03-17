export const PokeMart = {
  // TODO Quests to buy pokeballs
  // TODO Quests to exchange pokeballs for others
  // TODO Quests to buy healing items
  CURRENCIES: [ "copper_ingot", "iron_ingot", "gold_ingot", "emerald", "diamond", "netherite_ingot" ],
  
  writeShopChapters: (print?: (msg: string) => void): Record<string, string> => {
      if (print) print("\n-=-=-=-=-=-=-=-=-=-=- WRITING SHOPPING-BASED QUESTS -=-=-=-=-=-=-=-=-=-=-");
      
      let generatedFiles: Record<string, string> = {};
      
      //todo

      return generatedFiles;
  }
};