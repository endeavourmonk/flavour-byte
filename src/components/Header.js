import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  console.log("header");

  return (
    <header className="h-16 p-1 px-6 flex justify-between items-center shadow-sm">
      <Link to="/">
        <img
          className="w-12"
          alt="logo"
          src="https://res.cloudinary.com/cloudimagestore-/image/upload/f_auto,q_auto/v1/Assets/n4ib35lo32o8p7hxizrm"
        />
      </Link>

      <nav className="mt-5">
        <ul className="list-none p-0 text-lg font-semibold">
          <li className="inline-block mr-2">{isOnline ? `🟢` : `🔴`}</li>
          <li className="inline-block mr-2">
            <Link
              to="/"
              className="text-gray-600 no-underline hover:text-orange-500"
            >
              Home
            </Link>
          </li>
          <li className="inline-block mr-2">
            <Link
              to="/menu"
              className="text-gray-600 no-underline hover:text-orange-500"
            >
              Offers
            </Link>
          </li>
          <li className="inline-block mr-2">
            <Link
              to="/about"
              className="text-gray-600 no-underline hover:text-orange-500"
            >
              About
            </Link>
          </li>
          <li className="inline-block mr-2">
            <Link
              to="/contact"
              className="text-gray-600 no-underline hover:text-orange-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
