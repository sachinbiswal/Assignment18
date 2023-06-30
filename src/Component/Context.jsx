import { createContext, useState } from "react";

export const mycontext = createContext();

function CustomProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false)
    const [data,setData] = useState({
        name :"",
        password:"",
      })
    
    
    return(
        <mycontext.Provider value={{loggedIn, setLoggedIn,data,setData}}>
             {children}
        </mycontext.Provider>
    )
}

export default CustomProvider;