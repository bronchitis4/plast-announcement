const init = {
            events: [],
            loading: false
        };

export const eventsReducer = (state = init, action) => {
    switch (action.type) {
        case "FETCHING_EVENT": 
            return {
                ...state,
                loading: true
            }
        case "FETCHED_EVENT":
            return {
                ...state,
                loading: false,
                events: [...action.payload],
            }
        case "ADD_EVENT":
            return {
                ...state,
                events: [...state, action.payload]
            }
        default:
            return state;
    }
}