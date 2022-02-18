const STRINGS = {
    "Output": { en: "Output", jp: "出力" },
    // Stats
    "Strength": {
        en: "Strength",
        jp: "筋力(STR)"
    },
    "Dexterity": {
        en: "Dexterity",
        jp: "敏捷力(DEX)"
    },
    "Constitution": {
        en: "Constitution",
        jp: "耐久力(CON)"
    },
    "Intelligence": {
        en: "Intelligence",
        jp: "知力(INT)"
    },
    "Wisdom": {
        en: "Wisdom",
        jp: "判断力(WIS)"
    },
    "Charisma": {
        en: "Charisma",
        jp: "魅力(CHA)"
    },
    // Races
    "Race": { en: "Race", jp: "種族" },
    "Dragonborn": { en: "Dragonborn", jp: "ドラゴンボーン" },
    "Dwarf": { en: "Dwarf", jp: "ドワーフ" },
    "Elf": { en: "Elf", jp: "エルフ" },
    "Gnome": { en: "Gnome", jp: "ノーム" },
    "HalfElf": { en: "Half-Elf", jp: "ハーフエルフ" },
    "Halfling": { en: "Halfling", jp: "ハーフリング" },
    "HalfOrc": { en: "Half-Orc", jp: "ハーフオーク" },
    "Human": { en: "Human", jp: "ヒューマン" },
    "Tiefling": { en: "Tiefling", jp: "ティーフリング" },
    // Classes
    "Class": { en: "Class", jp: "クラス" },
    "Barbarian": { en: "Barbarian", jp: "バーバリアン" },
    "Bard": { en: "Bard", jp: "バード" },
    "Cleric": { en: "Cleric", jp: "クレリック" },
    "Druid": { en: "Druid", jp: "ドルイド" },
    "Fighter": { en: "Fighter", jp: "ファイター" },
    "Monk": { en: "Monk", jp: "モンク" },
    "Paladin": { en: "Paladin", jp: "パラディン" },
    "Ranger": { en: "Ranger", jp: "レンジャー" },
    "Rogue": { en: "Rogue", jp: "ローグ" },
    "Sorcerer": { en: "Sorcerer", jp: "ソーサラー" },
    "Warlock": { en: "Warlock", jp: "ウォーロック" },
    "Wizard": { en: "Wizard", jp: "ウィザード" },
    // Backgrounds
    "Background": { en: "Background", jp: "背景" },
    "Acolyte": { en: "Acolyte", jp: "侍祭" },
    "Charlatan": { en: "Charlatan", jp: "ペテン師" },
    "Criminal": { en: "Criminal", jp: "犯罪者" },
    "Entertainer": { en: "Entertainer", jp: "演芸人" },
    "FolkHero": { en: "Folk Hero", jp: "民衆英雄" },
    "Gladiator": { en: "Gladiator", jp: "剣闘士" },
    "GuildArtisan": { en: "Guild Artisan", jp: "ギルド工匠" },
    "Hermit": { en: "Hermit", jp: "隠者" },
    "Knight": { en: "Knight", jp: "騎士" },
    "Noble": { en: "Noble", jp: "貴族" },
    "Outlander": { en: "Outlander", jp: "流浪人" },
    "Pirate": { en: "Pirate", jp: "海賊" },
    "Sage": { en: "Sage", jp: "賢者" },
    "Sailor": { en: "Sailor", jp: "船員" },
    "Soldier": { en: "Soldier", jp: "兵士" },
    "Urchin": { en: "Urchin", jp: "野良人" },
    // Skills
    "Acrobatics": { en: "Acrobatics (DEX)", jp: "軽業 (DEX)" },
    "AnimalHandling": { en: "Animal Handling (WIS)", jp: "動物使い (WIS)" },
    "Arcana": { en: "Arcana (INT)", jp: "魔法学 (INT)" },
    "Athletics": { en: "Athletics (STR)", jp: "運動 (STR)" },
    "Deception": { en: "Deception (CHA)", jp: "ペテン (CHA)" },
    "History": { en: "History (INT)", jp: "歴史 (INT)" },
    "Insight": { en: "Insight (WIS)", jp: "看破 (WIS)" },
    "Intimidation": { en: "Intimidation (CHA)", jp: "威圧 (CHA)" },
    "Investigation": { en: "Investigation (INT)", jp: "捜査 (INT)" },
    "Medicine": { en: "Medicine (WIS)", jp: "医術 (WIS)" },
    "Nature": { en: "Nature (INT)", jp: "自然 (INT)" },
    "Perception": { en: "Perception (WIS)", jp: "知覚 (WIS)" },
    "Performance": { en: "Performance (CHA)", jp: "芸能 (CHA)" },
    "Persuasion": { en: "Persuasion (CHA)", jp: "説得 (CHA)" },
    "Religion": { en: "Religion (INT)", jp: "宗教 (INT)" },
    "SleightofHand": { en: "Sleight of Hand (DEX)", jp: "手先の早業 (DEX)" },
    "Stealth": { en: "Stealth (DEX)", jp: "隠密 (DEX)" },
    "Survival": { en: "Survival (WIS)", jp: "生存 (WIS)" },
    "JSONOutput": { en: "JSON data copied to clipboard", jp: "データがコピーされました" }
};

function tr(key, lang) {
    try {
        return STRINGS[key][lang];
    }
    catch(err) {
        return key;
    }
}

export default tr;