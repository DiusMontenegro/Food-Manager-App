import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";
import { Link, Outlet } from "react-router-dom";

import Loader from "../../ui/Loader";

function Menu() {
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
        if (productSize === "small") {
            return "SM";
        } else if (productSize === "medium") {
            return "MD";
        } else if (productSize === "large") {
            return "LG";
        } else {
            return "XL";
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

                    <Outlet />
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
