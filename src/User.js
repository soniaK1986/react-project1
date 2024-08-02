import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function RegisterPage(){


    const navigate = useNavigate();

    const[user,setUser]= useState({
        fname:"",
        email:"",
        mobile:"",
        username:"",
        password:""
    })


    const inputHandler =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    const RegisterUser =(e)=>{
        e.preventDefault();
       axios.post("http://localhost:5000/register",user)
       .then(res=>{
        alert("user Registerd");
        navigate("/login")
       }).catch(err=>console.log(err));
    }
    return(<>
    <div className="container-full">
    <div className="row">
        
    <div className="col-md-6"><img src="pic/slider.jpg" alt="/"/></div>
            <div className="col-md-6 p-5 bg-dark text-white">
            <form onSubmit={RegisterUser}>
                <h3 align="">User Register</h3>
<br/>
                <div className="mb-3">
                    <input type="text" placeholder="Full Name" className="form-control" name="fname" value={user?.fname} onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                    <input type="text" placeholder="Email" className="form-control" name="email" value={user?.email} onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                    <input type="text" placeholder="Mobile" className="form-control" name="mobile" value={user?.mobile} onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                    <input type="text" placeholder="UserName" className="form-control" name="username" value={user?.username} onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                    <input type="password" placeholder="Password" className="form-control" name="password" value={user?.password} onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                   <button className="btn btn-primary">Register</button>
                   <button className="btn btn-warning mx-3" onClick={()=>navigate("/login")}>Already Registerd</button>
                </div>


                </form>
            </div>
        
       
    </div></div>
    
    </>)
}