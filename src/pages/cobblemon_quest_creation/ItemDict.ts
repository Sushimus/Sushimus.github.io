export const ItemDict = {
  // -=-=-=-=-=-=-=-=-=-=- HEALING -=-=-=-=-=-=-=-=-=-=-
  // X-Factor
  STAT_RAISERS: [ "x_attack", "x_defence", "x_special_attack", "x_special_defence", "x_speed", "x_accuracy", "dire_hit", "guard_spec" ],
  // Drink Your Ovaltine
  STAT_MODIFIERS: [ "hp_up", "protein", "iron", "calcium", "zinc", "carbos", "pp_up", "pp_max" ],
  // Witch Doctor
  HERBS: [ "mental_herb", "mirror_herb", "power_herb", "revival_herb", "white_herb" ],
  REMEDIES: [ "remedy", "fine_remedy", "superb_remedy" ],
  HEAL_WITCH_MISCS: [ "big_root", "pep_up_flower", "medicinal_leek", "medicinal_brew", "heal_powder", "destiny_knot", "cleanse_tag" ],
  // No Nurse Required
  HEALTH_HEALERS: [ "potion", "super_potion", "hyper_potion", "max_potion", "full_restore", "revive", "max_revive" ],
  STATUS_HEALERS: [ "antidote", "awakening", "burn_heal", "ice_heal", "paralyze_heal", "full_heal" ],
  HEAL_NURSE_MISCS: [ "ether", "max_ether", "elixir", "max_elixir", "healing_machine" ],

  // -=-=-=-=-=-=-=-=-=-=- FARMING -=-=-=-=-=-=-=-=-=-=-
  // Apricornicopia
  APRICORNS: [ "red_apricorn", "yellow_apricorn", "green_apricorn", "blue_apricorn", "pink_apricorn", "white_apricorn", "black_apricorn" ],
  APRICORN_SPROUTS: [ "red_apricorn_seed", "yellow_apricorn_seed", "green_apricorn_seed", "blue_apricorn_seed", "pink_apricorn_seed", "white_apricorn_seed", "black_apricorn_seed" ],
  // Sweet Tooth
  SWEETS: [ "whipped_dream", "strawberry_sweet", "berry_sweet", "love_sweet", "clover_sweet", "flower_sweet", "star_sweet", "ribbon_sweet" ],
  SWEETS_COMPLETIONS: [ "sweet_apple" ],
  // Honest Work
  BERRIES: [ "oran_berry", "cheri_berry", "chesto_berry", "pecha_berry", "rawst_berry", "aspear_berry", "persim_berry", "razz_berry", "bluk_berry",
             "nanab_berry", "wepear_berry", "pinap_berry", "occa_berry", "passho_berry", "wacan_berry", "rindo_berry", "yache_berry", "chople_berry",
             "kebia_berry", "shuca_berry", "coba_berry", "payapa_berry", "tanga_berry", "charti_berry", "kasib_berry", "haban_berry", "colbur_berry",
             "babiri_berry", "chilan_berry", "roseli_berry" ],
  MUTATE_BERRIES: [ "leppa_berry", "lum_berry", "hopo_berry", "figy_berry", "iapapa_berry", "wiki_berry", "aguav_berry", "mago_berry", "sitrus_berry",
                    "touga_berry", "cornn_berry", "magost_berry", "rabuta_berry", "nomel_berry", "spelon_berry", "pemtre_berry", "watmel_berry", "durin_berry",
                    "belue_berry", "enigma_berry", "kee_berry", "maranga_berry", "pomeg_berry", "kelpsy_berry", "qualot_berry", "hondew_berry", "grepa_berry",
                    "tamato_berry", "liechi_berry", "ganlon_berry", "petaya_berry", "apicot_berry", "salac_berry", "starf_berry", "lansat_berry", "micle_berry",
                    "custap_berry", "jaboca_berry", "rowap_berry" ],
  MINTS: [ "lonely_mint", "adamant_mint", "naughty_mint", "brave_mint", "bold_mint", "impish_mint", "lax_mint", "relaxed_mint", "modest_mint",
           "mild_mint", "rash_mint", "quiet_mint", "calm_mint", "gentle_mint", "careful_mint", "sassy_mint", "timid_mint", "hasty_mint",
           "jolly_mint", "naive_mint", "serious_mint" ],
  MULCHES: [ "mulch", "growth_mulch", "rich_mulch", "surprise_mulch", "loamy_mulch", "coarse_mulch", "peat_mulch", "humid_mulch", "sandy_mulch" ],
  HONEST_MISCS: [ "vivichoke", "vivichoke_seeds", "pasture_block" ], // TODO pasture_block unlocks cobbreeding quests?
  HONEST_COMPLETIONS: [ "tart_apple" ],
  // Spoils Of Labor
  LABOR_MISCS: [ "leftovers", "chipped_pot", "sachet", "peat_block", "berry_juice", "vivichoke_dip", "braised_vivichoke" ],
  LABOR_COMPLETIONS: [ "galarica_wreath", "galarica_cuff" ],

  // -=-=-=-=-=-=-=-=-=-=- MISC -=-=-=-=-=-=-=-=-=-=-
  TYPE_BOOSTERS: [ "black_belt", "black_glasses", "charcoal_stick", "dragon_fang", "fairy_feather", "hard_stone", "magnet", "metal_coat", "miracle_seed",
                   "mystic_water", "never_melt_ice", "silk_scarf", "poison_barb", "sharp_beak", "silver_powder", "soft_sand", "spell_tag", "twisted_spoon" ],
  // Under The Sea
  SEA_MISCS: [ "deep_sea_scale", "deep_sea_tooth", "dragon_scale", "kings_rock" ],
  SEA_COMPLETIONS: [ "prism_scale" ],
  // Eye Of The Tiger
  TIGER_MISCS: [ "muscle_band", "power_anklet", "power_belt", "power_band", "power_bracer", "power_lens", "power_weight", "focus_band" ],
  // Certified Mall Ninja
  NINJA_MISCS: [ "auspicious_armor", "malicious_armor", "reaper_cloth", "toxic_orb", "heavy_duty_boots", "assault_vest", "wise_glasses", "quick_claw" ],
  NINJA_COMPLETIONS: [ "smoke_ball" ],
  // Dig Deep & Greedily
  EVOLUTION_STONES: [ "fire", "thunder", "water", "leaf", "moon", "sun", "dawn", "dusk", "shiny", "ice" ],
  DIG_MISCS: [ "rocky_helmet", "safety_goggles", "light_clay", "protector", "black_augurite", "oval_stone", "metal_coat" ],
  // For Science!
  SCIENCE_MISCS: [ "black_sludge", "lucky_egg", "flame_orb", "exp_share", "link_cable", "magmarizer", "upgrade", "electrizer", "dubious_disc",
                   "razor_fang", "razor_claw", "choice_specs", "choice_band", "choice_scarf", "pc" ],

  // -=-=-=-=-=-=-=-=-=-=- SHOP -=-=-=-=-=-=-=-=-=-=-
  BALLS: [
    "poke", "citrine", "verdant", "azure", "roseate", "slate", "premier",//1x catch rate
    "safari", "fast", "level", "lure", "heavy", "love", "moon", "sport", "park",//gimmick catch rate
    "net", "dive", "nest", "repeat", "timer", "dusk", "quick", "dream", "beast", //gimmick catch rate
    "heal", "friend", "luxury",//1x catch rate w/ gimmick
    "great", 
    "ultra",
    "master", 
    "cherish"//unobtainable w/out creative mode
  ],
  LEVEL_BOOSTERS: [ "exp_candy_xs", "exp_candy_s", "exp_candy_m", "exp_candy_l", "exp_candy_xl", "rare_candy" ] // TODO Cost increases as booster idx iterates
};