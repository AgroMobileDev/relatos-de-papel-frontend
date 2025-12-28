import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* logo */}
        <Link to="/home" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-primary-dark">
            Relatos de Papel
          </span>
        </Link>
        {/* navegacion */}
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
