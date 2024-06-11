import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";
import { useState } from "react";

import Loader from "../../ui/Loader";
import TableRow from "../../ui/TableRow";
import Modal from "../../ui/Modal";
import CreateItem from "./CreateItem";

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

    function toggleCreateModal() {
        setIsCreateModalOpen((show) => !show);
    }

    if (isLoading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="space-y-5 px-4 py-6 md:px-6">
            <h1 className="text-2xl font-bold md:text-3xl">The Menu</h1>

            <button
                className="btn btn-neutral btn-xs"
                onClick={toggleCreateModal}
            >
                Add Item
            </button>

            <div className="w-full overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-md">
                    <thead className="bg-gray-50">
                        <tr>
                            {[
                                "Name",
                                "Category",
                                "Price",
                                "Cost",
                                "Stock",
                                "Actions",
                            ].map((heading) => (
                                <th
                                    key={heading}
                                    className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {menu?.map((item, index) => (
                            <TableRow item={item} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isCreateModalOpen}>
                <CreateItem showModal={toggleCreateModal} />
            </Modal>
        </div>
    );
}

export default Menu;
