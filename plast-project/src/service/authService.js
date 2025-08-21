import { json } from "react-router-dom";

class AuthService {
    API = "http://localhost:5000/auth"
    login = async (login, password) => {
        try {
            const response = await fetch(`${this.API}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    login,
                    password
                })
            })

            const responseData = await response.json();
            return responseData;
        } catch(error) {
            throw error;
        }
    }
}

export default AuthService;