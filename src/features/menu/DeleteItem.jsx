import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../../services/apiMenu";
import toast from "react-hot-toast";

function DeleteItem({ handleDeleteModal, item }) {
    const queryClient = useQueryClient();

    const { isLoading, mutate } = useMutation({
        mutationFn: deleteItem,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["menu"],
            });

            toast.success("Item has been deleted");
        },
        onError: () => toast.error("Error Deleting the item"),
    });

    function removeItem(id) {
        mutate(id);
        handleDeleteModal();
    }

    return (
        <div>
            <h1>Are you sure you want to delete &quot;{item.name}&quot; ?</h1>

            <div className="space-x-2 text-end">
                <button
                    className="btn btn-ghost btn-sm mt-4"
                    onClick={handleDeleteModal}
                >
                    Cancel
                </button>
                <button
                    className="btn btn-error btn-sm mt-4 text-white"
                    onClick={() => removeItem(item.id)}
                    disabled={isLoading}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteItem;
