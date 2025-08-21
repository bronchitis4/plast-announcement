const init = {role: "user"};

export const userRole = (state = init, action) => {
    switch(action.type) {
        case "SET_USER_ROLE":
            return (
                {
                    ...state,
                    role: action.payload
                }
            )
        default:
            return state;
    }
}