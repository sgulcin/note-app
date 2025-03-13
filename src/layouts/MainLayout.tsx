import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
    return (
        <div className="">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}