import { Outlet } from "react-router-dom";
import Footer from "@/components/HeadLessFooter";

export default function HeadLessLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}