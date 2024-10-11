import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-around space-x-6 text-white font-semibold">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/burgers" className="hover:text-gray-300">
              Burgers
            </Link>
          </li>
          <li>
            <Link to="/burger-admin" className="hover:text-gray-300">
              Burger Admin
            </Link>
          </li>
          <li>
            <Link to="/delete-burger" className="hover:text-gray-300">
              Delete Burger
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
