const STRINGS = {
    "Output": { en: "Output", jp: "出力" },
    "Race": {
        en: "Race",
        jp: "種族"
    },
    "Class": {
        en: "Class",
        jp: "クラス"
    },
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
    // Classes
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
    // Skills
    "Acrobatics": { en: "Acrobatics (DEX)", jp: "軽業 (DEX)" },
    "Animal Handling": { en: "Animal Handling (WIS)", jp: "動物使い (WIS)" },
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
    "Sleight of Hand": { en: "Sleight of Hand (DEX)", jp: "手先の早業 (DEX)" },
    "Stealth": { en: "Stealth (DEX)", jp: "隠密 (DEX)" },
    "Survival": { en: "Survival (WIS)", jp: "生存 (WIS)" },
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