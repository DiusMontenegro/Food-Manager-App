import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex items-center justify-between bg-accent px-2 py-3 text-lg md:px-6 md:text-xl">
            <Link to="/" className="font-bold text-white">
                Food.
            </Link>

            <h1 className="text-base font-semibold">Hello UTAKPos !</h1>
        </header>
    );
}

export default Header;
