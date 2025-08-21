import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { fetchingEvent } from "../actions/actions";
class EventService {
    API = "http://localhost:5000/event"
    
    constructor() {
        this.auth = getAuth()
        this.dispatch = useDispatch();
    }

    createEvent = async (data) => {
        try {
            const user = this.auth.currentUser;
            const token = await user.getIdToken();

            const response = await fetch(`${this.API}/create-event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json();
            return responseData;

        }catch(error) {
            throw error;
        }
    }

    getEvents = async () => {
        try {
            this.dispatch(fetchingEvent());
            const response = await fetch(`${this.API}`, {
                method: "GET"
            })

            const responseData = await response.json();
            return responseData;
        } catch(error) {
            throw error;
        }
    }

    getEventById = async (id) => {
        try {
            const response = await fetch(`${this.API}/${id}`, {
                method: "GET"
            });

            const responseData = await response.json();
            return responseData;
        } catch(error) {
            throw error;
        }
    }
}

export default EventService;