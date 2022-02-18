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
          { label: "STR", value: "10" },
          { label: "DEX", value: "10" },
          { label: "CON", value: "10" },
          { label: "INT", value: "10" },
          { label: "WIS", value: "10" },
          { label: "CHA", value: "10" },
          { label: "StrProf", value: "0" },
          { label: "DexProf", value: "0" },
          { label: "ConProf", value: "0" },
          { label: "IntProf", value: "0" },
          { label: "WisProf", value: "0" },
          { label: "ChaProf", value: "0" },
          { label: "ProfBonus", value: "2" },
          { label: "Acrobatics", value: "0" },
          { label: "AnimalHandling", value: "0" },
          { label: "Arcana", value: "0" },
          { label: "Athletics", value: "0" },
          { label: "Deception", value: "0" },
          { label: "History", value: "0" },
          { label: "Insight", value: "0" },
          { label: "Intimidation", value: "0" },
          { label: "Investigation", value: "0" },
          { label: "Medicine", value: "0" },
          { label: "Nature", value: "0" },
          { label: "Perception", value: "0" },
          { label: "Performance", value: "0" },
          { label: "Persuasion", value: "0" },
          { label: "Religion", value: "0" },
          { label: "SleightofHand", value: "0" },
          { label: "Stealth", value: "0" },
          { label: "Survival", value: "0" }
        ],
        memo: ""
    }
};

function generateCommands(state) {
    const commands = [];

    commands.push(`1d20+{StrProf} [STR]`);
    commands.push(`1d20+{DexProf} [DEX]`);
    commands.push(`1d20+{ConProf} [CON]`);
    commands.push(`1d20+{IntProf} [INT]`);
    commands.push(`1d20+{WisProf} [WIS]`);
    commands.push(`1d20+{ChaProf} [CHA]`);
    commands.push(`1d20+{StrProf}+{ProfBonus} [STR熟練]`);
    commands.push(`1d20+{DexProf}+{ProfBonus} [DEX熟練]`);
    commands.push(`1d20+{ConProf}+{ProfBonus} [CON熟練]`);
    commands.push(`1d20+{IntProf}+{ProfBonus} [INT熟練]`);
    commands.push(`1d20+{WisProf}+{ProfBonus} [WIS熟練]`);
    commands.push(`1d20+{ChaProf}+{ProfBonus} [CHA熟練]`);
    commands.push(`1d20+{Acrobatics} [${tr('Acrobatics', state.lang)}]`);
    commands.push(`1d20+{AnimalHandling} [${tr('AnimalHandling', state.lang)}]`);
    commands.push(`1d20+{Arcana} [${tr('Arcana', state.lang)}]`);
    commands.push(`1d20+{Athletics} [${tr('Athletics', state.lang)}]`);
    commands.push(`1d20+{Deception} [${tr('Deception', state.lang)}]`);
    commands.push(`1d20+{History} [${tr('History', state.lang)}]`);
    commands.push(`1d20+{Insight} [${tr('Insight', state.lang)}]`);
    commands.push(`1d20+{Intimidation} [${tr('Intimidation', state.lang)}]`);
    commands.push(`1d20+{Investigation} [${tr('Investigation', state.lang)}]`);
    commands.push(`1d20+{Medicine} [${tr('Medicine', state.lang)}]`);
    commands.push(`1d20+{Nature} [${tr('Nature', state.lang)}]`);
    commands.push(`1d20+{Perception} [${tr('Perception', state.lang)}]`);
    commands.push(`1d20+{Performance} [${tr('Performance', state.lang)}]`);
    commands.push(`1d20+{Persuasion} [${tr('Persuasion', state.lang)}]`);
    commands.push(`1d20+{Religion} [${tr('Religion', state.lang)}]`);
    commands.push(`1d20+{SleightofHand} [${tr('SleightofHand', state.lang)}]`);
    commands.push(`1d20+{Stealth} [${tr('Stealth', state.lang)}]`);
    commands.push(`1d20+{Survival} [${tr('Survival', state.lang)}]`);

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
    ccd.data.initiative = state.character.dex + Math.floor((state.character.dex - 10) / 2);
    ccd.data.status[0].value = hp;
    ccd.data.status[0].max = hp;
    ccd.data.status[1].value += Math.floor((state.character.dex - 10) / 2);
    ccd.data.status[1].max += Math.floor((state.character.dex - 10) / 2);
    ccd.data.status[2].value = state.race.speed;
    ccd.data.status[2].max = state.race.speed;

    ccd.data.params[0].value = String(state.character.str);
    ccd.data.params[1].value = String(state.character.dex);
    ccd.data.params[2].value = String(state.character.con);
    ccd.data.params[3].value = String(state.character.int);
    ccd.data.params[4].value = String(state.character.wis);
    ccd.data.params[5].value = String(state.character.cha);
    ccd.data.params[6].value = String(Math.floor((state.character.str - 10) / 2));
    ccd.data.params[7].value = String(Math.floor((state.character.dex - 10) / 2));
    ccd.data.params[8].value = String(Math.floor((state.character.con - 10) / 2));
    ccd.data.params[9].value = String(Math.floor((state.character.int - 10) / 2));
    ccd.data.params[10].value = String(Math.floor((state.character.wis - 10) / 2));
    ccd.data.params[11].value = String(Math.floor((state.character.cha - 10) / 2));
    ccd.data.params[12].value = String(state.class.proficiencybonus);
    ccd.data.params[13].value = String(state.skills.acrobatics);
    ccd.data.params[14].value = String(state.skills.animalhandling);
    ccd.data.params[15].value = String(state.skills.arcana);
    ccd.data.params[16].value = String(state.skills.athletics);
    ccd.data.params[17].value = String(state.skills.deception);
    ccd.data.params[18].value = String(state.skills.history);
    ccd.data.params[19].value = String(state.skills.insight);
    ccd.data.params[20].value = String(state.skills.intimidation);
    ccd.data.params[21].value = String(state.skills.investigation);
    ccd.data.params[22].value = String(state.skills.medicine);
    ccd.data.params[23].value = String(state.skills.nature);
    ccd.data.params[24].value = String(state.skills.perception);
    ccd.data.params[25].value = String(state.skills.performance);
    ccd.data.params[26].value = String(state.skills.persuasion);
    ccd.data.params[27].value = String(state.skills.religion);
    ccd.data.params[28].value = String(state.skills.sleightofhand);
    ccd.data.params[29].value = String(state.skills.stealth);
    ccd.data.params[30].value = String(state.skills.survival);

    ccd.data.commands = generateCommands(state);
    ccd.data.memo = generateMemo(state);
    navigator.clipboard.writeText(JSON.stringify(ccd));
    showMsg(true);
}

export {
    exportToClipboard
};