import { Link } from "react-router-dom";
import { useCart } from "./CartMethod";
export default function HeaderPage(){

    let auth = localStorage.getItem("user");
    const [cart, setCart]=useCart();

    const Logout=()=>{
        localStorage.removeItem("user");
        window.location.href="/login";
    }
    return(<>
    <div className="container-fluid px-5 py-2 bg-primary shadow fixed-top">
        <div className="row">
        <div className="col-md-3 text-white"><h3>Flipkart</h3></div>
        <div className="col-md-6"><input type="text" placeholder="Search Item" className="form-control"/></div>

       {
        !auth?((<>        <div className="col-md-2  text-end"><Link to="/login"><button className="btn btn-warning">Login</button></Link></div></>)):((<>
           <div className="col-md-2  text-end"><button className="btn btn-warning" onClick={Logout}>Logout</button></div>
           <div className="col-md-1 text-end text-white mt-2">Cart{cart.length}</div>

        
        </>))
       }
     
       
       
        
        </div>
    </div>
    <div className="container-fluid px-5 py-2 shadow">
        <div className="row justify-content-center">

            <div className="col-md-6">
            <ul className="nav justify-content-center">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/" className="nav-link">Kid's</Link></li>
            <li><Link to="/" className="nav-link">Gents</Link></li>
            <li><Link to="/" className="nav-link">Ladies</Link></li>
            <li><Link to="/" className="nav-link">Electric</Link></li>
            </ul>
            </div>
        </div>
    </div>
    
    </>)
}