import { Outlet } from "react-router-dom";
import ThemeFooter from "../components/ThemeFooter";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

export default function ThemeLayout() {
    return (
        <Theme accentColor="lime">
            <Outlet />
            <ThemeFooter />
        </Theme>
    );
}