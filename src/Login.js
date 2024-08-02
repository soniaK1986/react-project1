import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function LoginPage(){
    const navigate = useNavigate();
    const[user,setUser]= useState({

        username:"",
        password:""
    })

    const inputHandler =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    const Login =(e)=>{
        e.preventDefault();
        axios.get("http://localhost:5000/register",user)
        .then(res=>{
       
            let result = res.data;
            let status = false;
            result.map(item=>{
                if(item.username==user?.username && item.password ==user?.password){
                    status = true;
                    localStorage.setItem("user",user?.username);
                }



        })

        if(status){
            navigate("/")
        }
        else{
            alert("Wrong User")
        }
        }).catch(err=>console.log(err));
        
    }
    return(<>
    <div className="container-full">

<div class="row">
<div className="col-md-6"><img src="pic/slider.jpg" alt="/"/></div>

<div className="col-md-6 p-5 bg-dark text-white">
<div className="top">
    <form onSubmit={Login}>
        <div className=" justify-content-center">
            
                <h3 align="login">User Login</h3>
                <br/>
                <div className="mb-3">
                    <input type="text" placeholder="User Name" className="form-control" name="username" value={user?.username} onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                    <input type="password" placeholder="Password" className="form-control" name="password" value={user?.password} onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                   <button className="btn btn-primary">Login</button>
                   <button className="btn btn-warning mx-3" onClick={()=>navigate("/user")}>New User?</button>
                </div>
            </div>
        
        </form></div>
        </div>


        
    </div></div>
    
    </>)
}