const initialState = {
    n1: 0,
    n2: 0,
    res: null
};

function reducers(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case "ADD":
            newState.n1 = action.payload.n1;
            newState.n2 = action.payload.n2;
            newState.res = newState.n1 + newState.n2;
            return newState;
        case "SUB":
            newState.n1 = action.payload.n1;
            newState.n2 = action.payload.n2;
            newState.res = newState.n1 - newState.n2;
            return newState;
        case "MUL":
            newState.n1 = action.payload.n1;
            newState.n2 = action.payload.n2;
            newState.res = newState.n1 * newState.n2;
            return newState;
        default:
            return state;
    }
}

export default reducers;