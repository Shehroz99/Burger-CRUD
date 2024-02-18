import {Link} from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/burgers">Burgers</Link>
                    </li>
                                        <li>
                        <Link to="/burger-admin">Burger Admin</Link>
                    </li>
                                        <li>
                        <Link to="/delete-burger">Delete Burger</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;