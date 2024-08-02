import CarouselPage from "./Carosel";
import HeaderPage from "./Header";
import Product from "./Product";
import User from "./User";

export default function Home(){

return(<>

<HeaderPage/>
<div className="container-fluid">

<CarouselPage/>


</div>
<div className="container-fluid p-5">

<Product/>


</div>
</>)
}