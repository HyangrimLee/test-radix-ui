
import { Outlet } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

export default function HomeLayout() {
    return (
        <Theme accentColor="blue">
            <Outlet />
        </Theme>
    );
}