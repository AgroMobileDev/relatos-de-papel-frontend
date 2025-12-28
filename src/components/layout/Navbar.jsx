import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-4">
      <Link to="/home" className="text-text-body hover:text-primary">
        Inicio
      </Link>
      {/*carrito*/}
    </nav>
  );
};

export default Navbar;
