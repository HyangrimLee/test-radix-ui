import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import ThemeLayout from "../layouts/ThemeLayout";
import Home from "../pages/Home";
import ThemeHome from "../pages/Theme/Home";
import Card from "../pages/Theme/Card";
// import ThemePage from "../pages/ThemePage";
// import HeadlessPage from "../pages/HeadlessPage";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
    //   { path: "/theme", element: <ThemePage /> },
    //   { path: "/headless", element: <HeadlessPage /> },
    ],
  },
  {
    element: <ThemeLayout />,
    children: [
      { path: "/theme", element: <ThemeHome /> },
      { path: "/theme/card", element: <Card /> },
    //   { path: "/headless", element: <HeadlessPage /> },
    ]

  }
  
]);