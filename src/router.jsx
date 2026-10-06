import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
 {
   path: "/",
   element: <App />,
   children: [
     { path: "", element: <Home /> },
     { path: "products", element: <Products /> },
     { path: "cart", element: <Cart /> },
     { path: "login", element: <Login /> },
     { path: "about", element: <About /> },
     { path: "contact", element: <Contact /> },
   ],
 },
]);

export default router;
