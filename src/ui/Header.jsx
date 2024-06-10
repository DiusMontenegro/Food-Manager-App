import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex items-center justify-between bg-accent">
            <Link to="/" className="font-bold">
                Food.
            </Link>
            <Link to="/menu">Menu</Link>
        </header>
    );
}

export default Header;
