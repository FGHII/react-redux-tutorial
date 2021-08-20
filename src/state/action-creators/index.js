//these are action creators that initiate an action in the reducer from
//the front-end (these are functions called from the front-end)
//each function takes an amount parameter and returns a dispatched
//action with a specific type recognized by the reducer as well as the 
//amount associated with that action

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}