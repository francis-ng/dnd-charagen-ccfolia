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


function calculateSkillBonuses(skill, state, dispatcher) {
    const key = skill.replace(' ', '').toLowerCase();
    const assocStat = SKILL_STAT_MAP[key];
    const baseStat = state[assocStat];
    const raceBonus = state.race[assocStat];

    const profString = state.race.proficiencies;
    const proficiencies = profString.split(',');
    for (let proficiency of proficiencies) {
        proficiency = proficiency.replace(' ', '').toLowerCase();
        if (proficiency === skill) {
            const bonus = Math.floor((baseStat + raceBonus - 10 ) / 2);
            dispatcher({ type: 'skill', data: { skill: proficiency, value: bonus } });
        }
    }
}

export {
    calculateSkillBonuses
};