
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },

      {
        path: "products/:id",
        element: <ProductDetails />
      },

      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "register", element: <Register /> },

      // 404 - Page Not Found
      { path: "*", element: <NotFound /> }
    ],
  },
]);

export default router;
