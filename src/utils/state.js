import classes from '../data/classes';
import races from '../data/races';
import backgrounds from '../data/backgrounds';
import { calculateSkillBonuses } from '../utils/calculators';

function reducer(state, action) {
    let updatedChar = {};
    let skillUpdate = null;
    switch (action.type) {
        case 'Language':
            return {
                ...state,
                lang: action.value
            };
        case 'Strength':
            updatedChar = {
                ...state.character,
                str: parseInt(action.value)
            };
            skillUpdate = calculateSkillBonuses(state.skills, updatedChar, state.race, state.class, state.background);
            return {
                ...state,
                character: updatedChar,
                skills: skillUpdate
            };
        case 'Dexterity':
            updatedChar = {
                ...state.character,
                dex: parseInt(action.value)
            };
            skillUpdate = calculateSkillBonuses(state.skills, updatedChar, state.race, state.class, state.background);
            return {
                ...state,
                character: updatedChar,
                skills: skillUpdate
            };
        case 'Constitution':
            updatedChar = {
                ...state.character,
                con: parseInt(action.value)
            };
            skillUpdate = calculateSkillBonuses(state.skills, updatedChar, state.race, state.class, state.background);
            return {
                ...state,
                character: updatedChar,
                skills: skillUpdate
            };
        case 'Intelligence':
            updatedChar = {
                ...state.character,
                int: parseInt(action.value)
            };
            skillUpdate = calculateSkillBonuses(state.skills, updatedChar, state.race, state.class, state.background);
            return {
                ...state,
                character: updatedChar,
                skills: skillUpdate
            };
        case 'Wisdom':
            updatedChar = {
                ...state.character,
                wis: parseInt(action.value)
            };
            skillUpdate = calculateSkillBonuses(state.skills, updatedChar, state.race, state.class, state.background);
            return {
                ...state,
                character: updatedChar,
                skills: skillUpdate
            };
        case 'Charisma':
            updatedChar = {
                ...state.character,
                cha: parseInt(action.value)
            };
            skillUpdate = calculateSkillBonuses(state.skills, updatedChar, state.race, state.class, state.background);
            return {
                ...state,
                character: updatedChar,
                skills: skillUpdate
            };
        case 'name':
            return {
                ...state,
                character: {
                    ...state.character,
                    name: action.value
                }
            };
        case 'race':
            const newRace = races[action.value];
            if (!newRace) {
                return state;
            }
            skillUpdate = calculateSkillBonuses(state.skills, state.character, newRace, state.class, state.background);
            return {
                ...state,
                race: races[action.value],
                skills: skillUpdate
            };
        case 'class':
            if (!classes[action.value]) {
                return state;
            }
            return {
                ...state,
                class: classes[action.value]
            };
        case 'background':
            const newBackground = backgrounds[action.value];
            if (!newBackground) {
                return state;
            }
            skillUpdate = calculateSkillBonuses(state.skills, state.character, state.race, state.class, newBackground);
            return {
                ...state,
                background: newBackground,
                skills: skillUpdate
            };
        default:
            throw new Error('Unknown action type');
    }
}

export {
    reducer
};