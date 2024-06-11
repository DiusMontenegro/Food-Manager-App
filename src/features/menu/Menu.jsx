import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";
import { useState } from "react";

import Loader from "../../ui/Loader";
import TableRow from "../../ui/TableRow";
import Modal from "../../ui/Modal";
import CreateItem from "./CreateItem";
import { Link, Outlet } from "react-router-dom";

function Menu() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const {
        data: menu,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["menu"],
        queryFn: getMenu,
    });

    // function toggleCreateModal() {
    //     setIsCreateModalOpen((show) => !show);
    // }

    if (isLoading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="space-y-5 ">
            <div className="drawer md:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content m-2">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-neutral drawer-button btn-xs text-xs md:hidden"
                    >
                        Menu
                    </label>

                    <Outlet />
                </div>
                <div className="drawer-side">
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
                        <li className="mb-3 font-bold">Menu items</li>
                        <li className="mb-3">
                            <Link className="btn btn-accent btn-sm rounded-md font-semibold text-white">
                                Create New Product
                            </Link>
                        </li>
                        <ul className="max-h-[460px] overflow-y-auto xl:max-h-[540px]">
                            {menu.map((item) => (
                                <li key={item.id} className="mb-1">
                                    <Link to={`/menu/item/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
            </div>

            {/* <Modal isOpen={isCreateModalOpen}>
                <CreateItem showModal={toggleCreateModal} />
            </Modal> */}
        </div>
    );
}

export default Menu;
