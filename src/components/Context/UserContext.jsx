import { createContext, useState } from "react";

export const UserContext = createContext({
    userName:"",
    userId:""
})

export const UserProvider = ({children}) =>
{
    const [userName, setUserName] = useState();
    
}


