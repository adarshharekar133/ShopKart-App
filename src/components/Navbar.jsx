import { Link } from "react-router-dom";

function Navbar() {
 return (
   <nav style={{ padding: "10px", background: "#eee" }}>
     <Link to="/" style={{ margin: "10px" }}>Home</Link>
     <Link to="/products" style={{ margin: "10px" }}>Products</Link>
     <Link to="/cart" style={{ margin: "10px" }}>Cart</Link>
     <Link to="/login" style={{ margin: "10px" }}>Login</Link>
   </nav>
 );
}

export default Navbar;
