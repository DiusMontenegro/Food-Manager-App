import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import EditItem from "../features/menu/EditItem";
import Modal from "./Modal";
import DeleteItem from "../features/menu/DeleteItem";

function TableRow({ item }) {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function handleFormModal() {
        setIsFormModalOpen((show) => !show);
    }

    function handleDeleteModal() {
        setIsDeleteModalOpen((show) => !show);
    }

    return (
        <>
            <tr className="hover:bg-gray-100">
                <td className="whitespace-nowrap px-4 py-2">{item.name}</td>
                <td className="whitespace-nowrap px-4 py-2">{item.category}</td>
                <td>
                    {item.options
                        ? item.options.map((item, index) => (
                              <h1 key={index}>
                                  {item.size} / $ {item.price}
                              </h1>
                          ))
                        : `$ ${item.price}`}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                    {item.options
                        ? item.options.map((item, index) => (
                              <h1 key={index}>
                                  {item.size} / $ {item.cost}
                              </h1>
                          ))
                        : `$ ${item.cost}`}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                    {item.options
                        ? item.options.map((item, index) => (
                              <h1 key={index}>
                                  {item.size} / {item.stock}
                              </h1>
                          ))
                        : `$ ${item.stock}`}
                </td>
                <td className="flex space-x-2 whitespace-nowrap px-4 py-2">
                    <button
                        className="btn btn-ghost btn-xs"
                        onClick={handleFormModal}
                    >
                        <CiEdit className="text-lg text-blue-600" />
                    </button>
                    <button
                        className="btn btn-ghost btn-xs"
                        onClick={handleDeleteModal}
                    >
                        <MdDeleteOutline className="text-lg text-red-600" />
                    </button>
                </td>
            </tr>

            <Modal isOpen={isFormModalOpen}>
                <EditItem handleFormModal={handleFormModal} />
            </Modal>

            <Modal isOpen={isDeleteModalOpen}>
                <DeleteItem handleDeleteModal={handleDeleteModal} item={item} />
            </Modal>
        </>
    );
}

export default TableRow;
