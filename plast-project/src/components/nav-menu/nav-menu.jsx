import './nav-menu.css';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div className="nav-menu">
            <img className="nav-menu__logo" src={logo} height={50} alt="Logo"/>
            <nav className="nav-menu__nav">
                <ul className="nav-menu__list">
                    <li className="nav-menu__item">
                        <Link className="nav-menu__link" to="/">АКЦІЇ</Link>
                    </li>
                    <li className="nav-menu__item">
                        <Link className="nav-menu__link" to="annouced">ЗГОЛОШЕНІ</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavMenu;
