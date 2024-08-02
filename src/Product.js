import { useCart } from "./CartMethod";
export default function ProductPage(){

    const[cart,setCart] = useCart()
  
    const Product=[

        {
            id:120,
            Name:"Samsung Washing Machine",
            Qty:0,
            Price:25000,
            Color:"red",
            Image:"image/p1.jpg"
        },

        {
            id:121,
            Name:"Sony Washing Machine",
            Qty:0,
            Price:15000,
            Color:"Blue",
            Image:"image/p2.jpg"
        },
        {
            id:122,
            Name:"Philips Washing Machine",
            Qty:0,
            Price:18000,
            Color:"Brown",
            Image:"image/p3.png"
        }

    ]

    let auth = localStorage.getItem("user");


    //addCart
    const addCart =(id)=>{

        let mycart =[...cart];

        const checkCart = mycart.find((x)=>{

            return x.id===id;
        })
        
        if(!checkCart){
        Product.map(item=>{
            if(item.id===id){
            const  itemobj ={...item,Qty:item.Qty+1}
                setCart([...cart,itemobj])

                alert("Item Added")

                localStorage.setItem("cart",JSON.stringify([...cart,itemobj]));
            }
        })
    }

    else{
        alert("This Item already Added");
    }
    }
    return(<>
    <div className="container">
<div className="row">
    {
        Product?.map(item=>
            <div className="col-md-4 text-center" key={item.id}>
                <div className="card">
                    <div className="card-body">
                        <img src={item.Image} className="w-50"/>
                        <h5>{item.Name}</h5>
                        <h5>Color: {item.Color}</h5>
                        <h5>Price :{item.Price}</h5>
                        <button className="btn btn-primary" onClick={()=>!auth?window.location.href="/login":addCart(item.id)}>Add to Cart</button>
                    
                    </div>
                </div>

            </div>

        )
    }


</div>
    </div>
    
    </>)
}