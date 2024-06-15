import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import AppLayout from "./ui/AppLayout";
import ItemDetails from "./features/menu/ItemDetails";
import CreateItem from "./features/menu/CreateItem";
import EditItem from "./features/menu/EditItem";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                children: [
                    {
                        path: "/menu/item/:id",
                        element: <ItemDetails />,
                    },
                    {
                        path: "/menu/create",
                        element: <CreateItem />,
                    },
                    {
                        path: "/menu/edit/:id",
                        element: <EditItem />,
                    },
                ],
            },
        ],
    },
]);

// Initialize a QueryClient
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router} />
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 4000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroudColor: "#f2f2f2",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
