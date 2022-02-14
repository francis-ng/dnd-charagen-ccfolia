const STRINGS = {
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