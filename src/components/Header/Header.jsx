import logo from '../../assets/images/manomano-logo.png';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return <header>
    <Link to="/">
      <img className="logo" src={logo} alt="logo" />
    </Link>
  </header>;
};

export default Header;
