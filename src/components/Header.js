import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useOnlineStatus from "../utils/useOnlineStatus";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SignalCellularNodataRoundedIcon from "@mui/icons-material/SignalCellularNodataRounded";
import SignalCellular4BarRoundedIcon from "@mui/icons-material/SignalCellular4BarRounded";

const Header = () => {
  const isOnline = useOnlineStatus();
  // subscribing to the store using selector
  const cartItemsCount = useSelector((store) => store.cart.length);
  console.log(useSelector((store) => store.cart));

  return (
    <header className="h-16 p-1 px-6 flex justify-between items-center shadow-sm fixed w-full bg-white z-30 top-0 left-0">
      <Link to="/">
        <img
          className="w-12"
          alt="logo"
          src="https://res.cloudinary.com/cloudimagestore-/image/upload/f_auto,q_auto/v1/Assets/n4ib35lo32o8p7hxizrm"
        />
      </Link>

      <nav className="mt-5">
        <ul className="list-none p-0 text-lg font-semibold">
          <li className="inline-block mr-2">
            {isOnline ? (
              <SignalCellular4BarRoundedIcon />
            ) : (
              <SignalCellularNodataRoundedIcon />
            )}
          </li>
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
              to="/contact"
              className="text-gray-600 no-underline hover:text-orange-500"
            >
              Contact
            </Link>
          </li>
          <li className="inline-block mr-2">
            <Link
              to="/cart"
              className="text-gray-600 no-underline hover:text-orange-500 relative"
            >
              <ShoppingCartRoundedIcon fontSize="large" />
              <p className="absolute top-0 right-0 translate-x-2/4 -translate-y-2/3 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItemsCount}
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
