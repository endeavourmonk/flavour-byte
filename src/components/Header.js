import { Link } from "react-router-dom";

const Header = () => {
  console.log("header");
  return (
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          alt="logo"
          src="https://res.cloudinary.com/cloudimagestore-/image/upload/f_auto,q_auto/v1/Assets/n4ib35lo32o8p7hxizrm"
        />
      </Link>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">Offers</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
