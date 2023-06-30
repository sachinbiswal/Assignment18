import React, { useContext } from 'react';
import { mycontext } from './Context';
 
 const Login = () => {

  const {setLoggedIn,data,setData}  = useContext(mycontext);
 

  const handle = ()=>{
    if((data.name=== "admin" && data.password==="admin@123") || (data.name==='sachin' && data.password==='sachin@123')){
      setLoggedIn(true)
    }else{
      alert("Enter Proper Credential")
    }
  }
   return (
     <div style={{boxShadow:'0 0 10px solid black'}}>
       <h3 style={{color:"red",fontSize:'40px'}}> Welcome To Login Form</h3>
       <div>
        <br />
        <input style={{padding:"10px" ,width:"300px"}} type="text" placeholder='User Name' onChange={(e)=>{
          setData({
            ...data,
            name: e.target.value,
          })
        }} />
       </div>
       <div>
        <br />
        <  input style={{padding:"10px" ,width:"300px"}} type="password" placeholder='Password'  onChange={(e)=>{
          setData({
            ...data,
            password:e.target.value,
          })
        }} />
       </div>
       <div>
        <br />
        <button style={{padding:"10px",width:"150px",fontSize:"20px"}} onClick={handle}>Login</button>
       </div>

     </div>
   );
 }
 
 export default Login;
 