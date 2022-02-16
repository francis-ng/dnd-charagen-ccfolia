import classes from '../data/classes';

function reducer(state, action) {
    switch (action.type) {
        case 'Language':
            return {
                ...state,
                lang: action.value
            };
        case 'Strength':
            return {
                ...state,
                str: parseInt(action.value)
            };
        case 'Dexterity':
            return {
                ...state,
                dex: parseInt(action.value)
            };
        case 'Constitution':
            return {
                ...state,
                con: parseInt(action.value)
            };
        case 'Intelligence':
            return {
                ...state,
                int: parseInt(action.value)
            };
        case 'Wisdom':
            return {
                ...state,
                wis: parseInt(action.value)
            };
        case 'Charisma':
            return {
                ...state,
                cha: parseInt(action.value)
            };
        case 'name':
            return {
                ...state,
                name: parseInt(action.value)
            };
        case 'class':
            return {
                ...state,
                class: classes[action.value]
            };
        case 'skill':
            return {
                ...state,
                skills: {
                    ...state.skills,
                    [action.data.skill]: action.data.value
                }
            };
        default:
            throw new Error('Unknown action type');
    }
}

export {
    reducer
};