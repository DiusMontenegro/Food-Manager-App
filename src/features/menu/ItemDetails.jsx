import { useQuery } from "@tanstack/react-query";
import { getItemById } from "../../services/apiMenu";
import Loader from "../../ui/Loader";
import { useParams } from "react-router-dom";

function ItemDetails() {
    const { id } = useParams();

    const {
        data: item,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["menu", id],
        queryFn: () => getItemById(id),
        enabled: !!id,
    });

    if (isLoading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    console.log(item);
    return (
        <div>
            <h1>Item Details</h1>
            <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
    );
}

export default ItemDetails;
