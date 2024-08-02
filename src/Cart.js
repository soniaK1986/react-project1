import HeaderPage from "./Header"
import { useCart } from "./CartMethod"
export default function CartPage(){
    const[cart,setCart] = useCart()
    return(<>
    <HeaderPage/>
    <div className="container mt-5">
{
cart.length<1?(<><img src="image/cart.png"/></>):(<h4>Cart Length is {cart.length}</h4>)
}
    </div>
    
    </>)
}