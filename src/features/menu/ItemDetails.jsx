import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteItem, getItemById } from "../../services/apiMenu";
import { formatTimestamp } from "../../utils/helpers/formatDate";
import toast from "react-hot-toast";

import Loader from "../../ui/Loader";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Modal from "../../ui/Modal";

function ItemDetails() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {
        data: item,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["menu", id],
        queryFn: () => getItemById(id),
        enabled: !!id,
    });

    function handleOpenModal() {
        setIsOpenModal((show) => !show);
    }

    const { mutate } = useMutation({
        mutationFn: deleteItem,
        onSuccess: () => {
            toast.success("Product successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["menu"],
            });

            handleOpenModal();
            navigate("/menu");
        },
        onError: (err) => toast.error(err.message),
    });

    if (isLoading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="mt-2 text-xl font-bold sm:text-2xl">
                    Item Details
                </h1>
                <div className="space-x-2">
                    <Link
                        to={`/menu/edit/${id}`}
                        className="btn btn-primary btn-sm rounded-full p-1.5 text-center text-lg text-white shadow-xl"
                    >
                        <CiEdit />
                    </Link>
                    <button
                        onClick={handleOpenModal}
                        className="btn btn-error btn-sm rounded-full p-1.5 text-center text-lg text-white shadow-xl"
                    >
                        <MdOutlineDeleteOutline />
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-lg rounded-lg bg-white p-4 shadow-md">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="col-span-full flex flex-col sm:col-span-2">
                        <span className="font-semibold">ID:</span>
                        <span>{id}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Name:</span>
                        <span>{item.name}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Stock:</span>
                        <span>{item.stock}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Category:</span>
                        <span>{item.category}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Price:</span>
                        <span>${item.price}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Cost:</span>
                        <span>${item.cost}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Size:</span>
                        <span>{item.size}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Created At:</span>
                        <span>{formatTimestamp(item.createdAt)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Updated At:</span>
                        <span>{formatTimestamp(item.updatedAt)}</span>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpenModal}>
                <h2 className="mb-4 text-lg">
                    Are you sure you want to delete
                    <span className="block text-base font-bold">
                        &quot;{item.name} - {item.size}
                        &quot; ?
                    </span>
                </h2>
                <div className="flex items-center justify-end gap-2">
                    <button
                        className="btn btn-ghost btn-sm rounded-md"
                        onClick={handleOpenModal}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-error btn-sm rounded-md text-white"
                        onClick={() => mutate(item.id)}
                    >
                        Delete
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default ItemDetails;
