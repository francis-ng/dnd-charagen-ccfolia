const SKILL_STAT_MAP = {
    acrobatics: 'dex',
    animalhandling: 'wis',
    arcana: 'int',
    athletics: 'str',
    deception: 'cha',
    history: 'int',
    insight: 'wis',
    intimidation: 'cha',
    investigation: 'int',
    medicine: 'wis',
    nature: 'int',
    perception: 'wis',
    performance: 'cha',
    persuasion: 'cha',
    religion: 'int',
    sleightofhand: 'dex',
    stealth: 'dex',
    survival: 'wis'
}


function calculateAbilityBonus(stat, character, race) {
    return Math.floor((character[stat] + race[stat] - 10 ) / 2);
}

function calculateSkillBonuses(skills, character, race, jobclass, background) {
    const result = {
        acrobatics: 0,
        animalhandling: 0,
        arcana: 0,
        athletics: 0,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        performance: 0,
        persuasion: 0,
        religion: 0,
        sleightofhand: 0,
        stealth: 0,
        survival: 0
    };
    for (const key in skills) {
        if (skills.hasOwnProperty(key)) {
            const assocStat = SKILL_STAT_MAP[key];

            const profString = background.skills + ',' + race.proficiencies;
            const proficiencies = profString.split(',');

            let bonus = calculateAbilityBonus(assocStat, character, race);
            for (let proficiency of proficiencies) {
                proficiency = proficiency.replace(' ', '').toLowerCase();
                if (proficiency === key) {
                    bonus += jobclass.proficiencybonus;
                }
            }
            result[key] = bonus;
        }
    }
    return result;
}

export {
    SKILL_STAT_MAP,
    calculateSkillBonuses
};