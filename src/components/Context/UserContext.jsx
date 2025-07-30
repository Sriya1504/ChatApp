import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
    userName:"",
    userId:"",
    createUser: ()=>{ },
    checkUser: ()=>{ }
})

export const UserProvider = ({children}) =>
{
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    
 function createUser(value)
 {
    setUserName(value);
    const id= Math.random().toString().substring();
    setUserId(id)
    const user={
        "name": userName,
        "id": userId
    }
    localStorage.setItem("user",JSON.stringify(user))
 }

function checkUser()
{
    let user= localStorage.getItem("user")
    if(user)
    {
        let myUser=JSON.parse(user)
        setUserName(myUser.name)
        setUserId(myUser.id)

    }
}

    return(
        <UserContext.Provider value={
            {
                userName,
                userId,
                createUser,
                checkUser
            }
        }>
        {children}

        </UserContext.Provider>
    )
}


