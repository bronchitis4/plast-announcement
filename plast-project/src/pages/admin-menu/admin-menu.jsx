import './admin-menu.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminMenu = () => {
    const {user, loading, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    if(loading) {
        return <p>Зачекай...</p>
    }

    if(!isAuthenticated) {
        return <p>НЕА</p>
    }

    const handleSingOut = () => {
        signOut(auth);
        navigate('/');
    }

    return(
        <div className='admin-option-list'>
            <button>           
                <Link to="/new-event">Додати акцію</Link>
            </button>

            <button>            
                <Link>Переглянути список акцій</Link>
            </button>

            <button onClick={handleSingOut}>Вийти</button>
        </div>
    )
}

export default AdminMenu;