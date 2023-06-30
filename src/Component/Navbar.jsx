import React, { useContext } from 'react';
import { mycontext } from './Context';
import "./Navbar.css"
const Nav = () => {

    const {setLoggedIn,data} = useContext(mycontext)
  return (
    <div className='nav'>
       <div id='title'>
          <h2>{data.name}</h2>   
       </div>
       <div id="menu">
        <a href=''>Home</a>
        <a href=''>Profile</a>
        <a href=''>Products</a>
        <a href=''>Support</a>
        <button onClick={()=>{
            setLoggedIn(false)
        }} >
          Logout

        </button>
        
       </div>
    </div>
  );
}

export default Nav;
