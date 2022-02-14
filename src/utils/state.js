function reducer(state, action) {
    switch (action.type) {
        case 'stat':
            const newParams = state.data.params.map((el, i) => {
                if (i === action.index) return { ...el, value: action.value };
                else return el;
            });
            const profBonus = Math.floor((action.value - 10) / 2);
            const sign = profBonus > 0 ? '+' : '-';
            newParams[state.index + 6].value = sign + Math.abs(profBonus);
            return {
                ...state,
                data: {
                    ...state.data,
                    params: newParams
                }
            }
        default:
            throw new Error('Unknown action type');
    }
}

function setStat(state, stat) {

}

export {
    reducer
};