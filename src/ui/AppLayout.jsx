import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default AppLayout;
