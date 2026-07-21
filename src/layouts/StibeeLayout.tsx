import { Outlet } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

export default function StibeeLayout() {
    return (
        <Theme accentColor="tomato" grayColor="mauve">
            <Outlet />
        </Theme>
    );
}