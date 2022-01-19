const initialState = {
    quoteBody:{ mood: "5"},
    moodQuote: ""
};

function rootReducer(state = initialState, action){
    switch (action.type) {
        case "UPDATE_MOOD":
            return {
                ...state,
                quoteBody: { mood: action.payload },
            };
        case "GET_QUOTE":
            return{
                ...state,
                moodQuote: action.payload
            };
        case "RESTART_QUOTE":
            return{
                ...state,
                moodQuote: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;