import tr from "./translator";

const baseData = {
    kind: "character",
    data: {
        name: "",
        initiative: 0,
        externalUrl: "",
        iconUrl: null,
        commands: "",
        status: [
            { label: "HP", value: 0, max: 0 },
            { label: "AC", value: 10, max: 10 },
            { label: "速度", value: 0, max: 0 }
        ],
        params: [
          { label: "STR", value: 10 },
          { label: "DEX", value: 10 },
          { label: "CON", value: 10 },
          { label: "INT", value: 10 },
          { label: "WIS", value: 10 },
          { label: "CHA", value: 10 },
          { label: "StrProf", value: 0 },
          { label: "DexProf", value: 0 },
          { label: "ConProf", value: 0 },
          { label: "IntProf", value: 0 },
          { label: "WisProf", value: 0 },
          { label: "ChaProf", value: 0 },
          { label: "ProfBonus", value: 2 },
          { label: "Acrobatics", value: 0 },
          { label: "AnimalHandling", value: 0 },
          { label: "Arcana", value: 0 },
          { label: "Athletics", value: 0 },
          { label: "Deception", value: 0 },
          { label: "History", value: 0 },
          { label: "Insight", value: 0 },
          { label: "Intimidation", value: 0 },
          { label: "Investigation", value: 0 },
          { label: "Medicine", value: 0 },
          { label: "Nature", value: 0 },
          { label: "Perception", value: 0 },
          { label: "Performance", value: 0 },
          { label: "Persuasion", value: 0 },
          { label: "Religion", value: 0 },
          { label: "SleightofHand", value: 0 },
          { label: "Stealth", value: 0 },
          { label: "Survival", value: 0 }
        ],
        memo: ""
    }
};

function generateCommands(state) {
    const commands = [];

    commands.push(`d20+{StrProf} [STR]`);
    commands.push(`d20+{DexProf} [DEX]`);
    commands.push(`d20+{ConProf} [CON]`);
    commands.push(`d20+{IntProf} [INT]`);
    commands.push(`d20+{WisProf} [WIS]`);
    commands.push(`d20+{ChaProf} [CHA]`);
    commands.push(`d20+{StrProf}+{ProfBonus} [STR熟練]`);
    commands.push(`d20+{DexProf}+{ProfBonus} [DEX熟練]`);
    commands.push(`d20+{ConProf}+{ProfBonus} [CON熟練]`);
    commands.push(`d20+{IntProf}+{ProfBonus} [INT熟練]`);
    commands.push(`d20+{WisProf}+{ProfBonus} [WIS熟練]`);
    commands.push(`d20+{ChaProf}+{ProfBonus} [CHA熟練]`);
    commands.push(`d20+{Acrobatics} [${tr('Acrobatics', state.lang)}]`);
    commands.push(`d20+{AnimalHandling} [${tr('AnimalHandling', state.lang)}]`);
    commands.push(`d20+{Arcana} [${tr('Arcana', state.lang)}]`);
    commands.push(`d20+{Athletics} [${tr('Athletics', state.lang)}]`);
    commands.push(`d20+{Deception} [${tr('Deception', state.lang)}]`);
    commands.push(`d20+{History} [${tr('History', state.lang)}]`);
    commands.push(`d20+{Insight} [${tr('Insight', state.lang)}]`);
    commands.push(`d20+{Intimidation} [${tr('Intimidation', state.lang)}]`);
    commands.push(`d20+{Investigation} [${tr('Investigation', state.lang)}]`);
    commands.push(`d20+{Medicine} [${tr('Medicine', state.lang)}]`);
    commands.push(`d20+{Nature} [${tr('Nature', state.lang)}]`);
    commands.push(`d20+{Perception} [${tr('Perception', state.lang)}]`);
    commands.push(`d20+{Performance} [${tr('Performance', state.lang)}]`);
    commands.push(`d20+{Persuasion} [${tr('Persuasion', state.lang)}]`);
    commands.push(`d20+{Religion} [${tr('Religion', state.lang)}]`);
    commands.push(`d20+{SleightofHand} [${tr('SleightofHand', state.lang)}]`);
    commands.push(`d20+{Stealth} [${tr('Stealth', state.lang)}]`);
    commands.push(`d20+{Survival} [${tr('Survival', state.lang)}]`);

    return commands.join("\n");
}

function generateMemo(state) {
    const memos = [];

    const raceAbilities = state.race.abilities.split(',');
    for (const ability of raceAbilities) {
        memos.push(ability.trim());
    }

    const classProficiencies = state.class.armorweapon.split(',');
    for (const proficiency of classProficiencies) {
        memos.push(proficiency.trim());
    }

    const savingThrows = state.class.savingthrows;
    memos.push(`Saving throws: ${savingThrows}`);

    return memos.join("\n");
}

function exportToClipboard(state, showMsg) {
    const ccd = JSON.parse(JSON.stringify(baseData));
    const hp = parseInt(state.class.hitdice.split('d')[1]);
    ccd.data.name = state.character.name;
    ccd.data.status[0].value = hp;
    ccd.data.status[0].max = hp;
    ccd.data.status[1].value += Math.floor((state.character.dex - 10) / 2);
    ccd.data.status[1].max += Math.floor((state.character.dex - 10) / 2);
    ccd.data.status[2].value = state.race.speed;
    ccd.data.status[2].max = state.race.speed;

    ccd.data.params[0].value = state.character.str;
    ccd.data.params[1].value = state.character.dex;
    ccd.data.params[2].value = state.character.con;
    ccd.data.params[3].value = state.character.int;
    ccd.data.params[4].value = state.character.wis;
    ccd.data.params[5].value = state.character.cha;
    ccd.data.params[6].value = Math.floor((state.character.str - 10) / 2);;
    ccd.data.params[7].value = Math.floor((state.character.dex - 10) / 2);;
    ccd.data.params[8].value = Math.floor((state.character.con - 10) / 2);;
    ccd.data.params[9].value = Math.floor((state.character.int - 10) / 2);;
    ccd.data.params[10].value = Math.floor((state.character.wis - 10) / 2);;
    ccd.data.params[11].value = Math.floor((state.character.cha - 10) / 2);;
    ccd.data.params[12].value = state.class.proficiencybonus;
    ccd.data.params[13].value = state.skills.acrobatics;
    ccd.data.params[14].value = state.skills.animalhandling;
    ccd.data.params[15].value = state.skills.arcana;
    ccd.data.params[16].value = state.skills.athletics;
    ccd.data.params[17].value = state.skills.deception;
    ccd.data.params[18].value = state.skills.history;
    ccd.data.params[19].value = state.skills.insight;
    ccd.data.params[20].value = state.skills.intimidation;
    ccd.data.params[21].value = state.skills.investigation;
    ccd.data.params[22].value = state.skills.medicine;
    ccd.data.params[23].value = state.skills.nature;
    ccd.data.params[24].value = state.skills.perception;
    ccd.data.params[25].value = state.skills.performance;
    ccd.data.params[26].value = state.skills.persuasion;
    ccd.data.params[27].value = state.skills.religion;
    ccd.data.params[28].value = state.skills.sleightofhand;
    ccd.data.params[29].value = state.skills.stealth;
    ccd.data.params[30].value = state.skills.survival;

    ccd.data.commands = generateCommands(state);
    ccd.data.memo = generateMemo(state);
    navigator.clipboard.writeText(JSON.stringify(ccd));
    showMsg(true);
}

export {
    exportToClipboard
};