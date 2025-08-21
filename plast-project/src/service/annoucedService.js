import { getAuth } from "firebase/auth";

class AnnoucedService {
    API = "http://localhost:5000/annouced"
    constructor() {
        this.auth = getAuth();
    }

    addAnnouced = async (data) => {
        const token = await this.auth.currentUser.getIdToken();
        try {
            const response = await fetch(`${this.API}/new-annouced`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                    
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json();
            return responseData;
    } catch(error) {
            throw error;
        }
    }

    getAnnoucedsById = async (id) => {
        try {
            const response = await fetch(`${this.API}/${id}`);
            const responseData = await response.json();

            return responseData;
        }catch(error) {
            throw error;
        }
    }
}

export default AnnoucedService;