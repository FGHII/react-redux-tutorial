//a reducer takes a value (to update the state with) and and action (how the state should be updated)
//and updates the existing state with the corresponding value and action

const accountReducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
};

export default accountReducer;