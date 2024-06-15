import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";
import { Link, Outlet, useLocation } from "react-router-dom";

import Loader from "../../ui/Loader";

function Menu() {
    const location = useLocation();

    const {
        data: menu,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["menu"],
        queryFn: getMenu,
    });

    if (isLoading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    function abbreviateSize(productSize) {
        switch (productSize) {
            case "small":
                return "SM";
            case "medium":
                return "MD";
            case "large":
                return "LG";
            case "extra-large":
                return "XL";
            default:
                return productSize.toUpperCase();
        }
    }

    return (
        <div className="space-y-5">
            <div className="drawer md:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <main className="drawer-content m-2">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-neutral drawer-button btn-xs text-xs md:hidden"
                    >
                        Menu
                    </label>

                    {location.pathname === "/menu" ? (
                        <div className="mt-2 flex flex-col items-center justify-center space-y-6 rounded-xl bg-gradient-to-r from-green-300 via-teal-400 to-blue-500 p-8 text-center shadow-2xl transition-transform duration-300 md:p-12 lg:p-16">
                            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                                Discover Delicious Delights!
                            </h1>
                            <p className="my-4 text-lg text-white drop-shadow-md sm:text-xl md:text-2xl lg:text-3xl">
                                &quot;Indulge in every bite. Make your taste
                                buds dance!&quot;
                            </p>
                            <h3 className="text-white">
                                Start by clicking the menu items to check the
                                details or you can
                            </h3>
                            <div className="mt-6 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <Link
                                    to="/menu/create"
                                    className="btn btn-accent rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-lg font-bold text-white shadow-lg transition-transform hover:scale-110 hover:bg-gradient-to-br"
                                >
                                    Create New Product
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
                <aside className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu min-h-full w-60 bg-base-200 p-4 text-base-content lg:w-64">
                        <li className=" self-end ">
                            <label
                                htmlFor="my-drawer-2"
                                className="size-8 justify-center rounded-full p-0 text-xl font-bold md:hidden"
                            >
                                &times;
                            </label>
                        </li>
                        {/* Sidebar content here */}
                        <li className="mb-3 text-xl font-bold">Menu items</li>
                        <li className="mb-3">
                            <Link
                                to="/menu/create"
                                className="btn btn-accent btn-sm rounded-md font-semibold text-white"
                            >
                                Create New Product
                            </Link>
                        </li>
                        <ul className="max-h-[440px] overflow-y-auto xl:max-h-[520px]">
                            {menu.map((item) => (
                                <li key={item.id} className="mb-1">
                                    <Link to={`/menu/item/${item.id}`}>
                                        {item.name} -{" "}
                                        {abbreviateSize(item.size)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </aside>
            </div>
        </div>
    );
}

export default Menu;
