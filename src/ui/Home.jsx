import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex h-full flex-col items-center justify-center px-2 ">
            <div className="text-center text-2xl font-bold md:text-4xl">
                <h1>Taste the best today!</h1>
                <h1 className="text-accent">Food that delights, every bite!</h1>
            </div>

            <Link to="/menu" className="btn btn-accent btn-md mt-8">
                Explore the menu!
            </Link>
        </div>
    );
}

export default Home;
