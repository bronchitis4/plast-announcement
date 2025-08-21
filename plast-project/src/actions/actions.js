export const setUserRole = (value) => {
    return {
        type: "SET_USER_ROLE",
        payload: value
    }
}

export const fetchedEvent = (value) => {
    return {
        type: "FETCHED_EVENT",
        payload: value
    }
}

export const fetchingEvent = () => {
    return {
        type: "FETCHING_EVENT"
    }
}


export const addEvent = (value) => {
    return {
        type: 'ADD_EVENT',
        payload: value
    }
}

