import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";
import BranchesPage from "../Pages/Branches/BranchesPage";
import Menu from "../Pages/Menu/Menu";
import Offer from "../Pages/Offer/Offer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/offer",
        element: <Offer/>,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/branch",
        element: <BranchesPage/>,
      },

    ],
  }
]);
