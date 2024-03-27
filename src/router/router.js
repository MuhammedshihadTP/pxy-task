import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Landing from "../pages/Landing";
import Cart from "../pages/Cart";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },

      { path: "/cart", element: <Cart /> },

    
    ],
  },
]);
