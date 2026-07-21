import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "@/layouts/HomeLayout";
import ThemeLayout from "@/layouts/ThemeLayout";
import HeadlessLayout from "@/layouts/HeadLessLayout";
import StibeeLayout from "@/layouts/StibeeLayout";
import Home from "@/pages/Home";

// Theme
import ThemeHome from "@/pages/Theme/Home";
import Avatar from "@/pages/Theme/Avatar";
import Card from "@/pages/Theme/Card";
import Kbd from "@/pages/Theme/Kbd";
import Spinner from "@/pages/Theme/Spinner";

// Headless
import HeadlessHome from "@/pages/Headless/Home";
import AspectRatio from "@/pages/Headless/AspectRatio";
import Animation from "@/pages/Headless/Animation";
import Checkbox from "@/pages/Headless/Checkbox";
import DialogBox from "@/pages/Headless/DialogBox";
import PopOver from "@/pages/Headless/PopOver";
import RadioGroupDemo from "@/pages/Headless/RadioGroup";
import Switch from "@/pages/Headless/Switch";
import Toast from "@/pages/Headless/Toast";

// 스티비
import StibeeEdit from "@/pages/Stibee/Editor";

import Documents from "@/pages/Documents";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/documents", element: <Documents /> }
    ],
  },
  {
    element: <ThemeLayout />,
    children: [
      { path: "/theme", element: <ThemeHome /> },
      { path: "/theme/avatar", element: <Avatar /> },
      { path: "/theme/card", element: <Card /> },
      { path: "/theme/kbd", element: <Kbd /> },
      { path: "/theme/spinner", element: <Spinner /> },
    ],
  },
  {
    element: <HeadlessLayout />,
    children: [
      { path: "/headless", element: <HeadlessHome /> },
      { path: "/headless/animation", element: <Animation /> },
      { path: "/headless/aspect-ratio", element: <AspectRatio /> },
      { path: "/headless/checkbox", element: <Checkbox /> },
      { path: "/headless/dialog", element: <DialogBox /> },
      { path: "/headless/popover", element: <PopOver /> },
      { path: "/headless/radio-group", element: <RadioGroupDemo /> },
      { path: "/headless/switch", element: <Switch /> },
      { path: "/headless/toast", element: <Toast /> },
    ],
  },
  {
    element: <StibeeLayout />,
    children: [
      { path: "/stibee", element: <StibeeEdit /> }
    ]
  }
]);
