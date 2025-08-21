import './login-from.css'

import AuthService from '../../service/authService.js'
import { useState } from 'react';
import { auth } from '../../firebase/firebase.js';
import {signInWithCustomToken} from 'firebase/auth'; 
import { setUserRole } from '../../actions/actions.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const authService = new AuthService();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(login, password);
            if(response.statusCode != 200) {
                setError(response.message);
                return;
            }
            
            const userCredential = await signInWithCustomToken(auth, response.data.token);
        
            dispatch(setUserRole(response.data.role));
            navigate('/admin');

        }catch(error) {
            console.log(error.message);
            setError(error.message);
        }
    }
    
    return(
        <div className='login-form-wrapper'>
            <form>
                <input 
                    type='text' 
                    placeholder='логін...' 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)} 
                />

                <input 
                    type='text'
                    placeholder='пароль...' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmitForm}>Увійти</button>
                <p>{error}</p>
            </form>
        </div>
    )
}

export default LoginForm;