import { getMenu } from "../../services/apiMenu";

import { useQuery } from "@tanstack/react-query";

function Menu() {
    const {
        data: menu,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["menu"],
        queryFn: getMenu,
    });

    console.log(menu);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return <div>Menu</div>;
}

export default Menu;
