import AppLayout from "../Layouts/AppLayout.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import NotFound from "./NotFound.jsx";

const routes = [
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
