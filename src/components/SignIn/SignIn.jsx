
import {  useNavigate } from "react-router-dom";
import { MainHeading } from "../Heading/Heading";
import {  InputFieldText } from "../InputFields/InputFeild";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";


export default function SignIn() {

    const nav= useNavigate()
    const userctx = useContext(UserContext)
    const [userName, setUserName] = useState('')

    useEffect(()=>{
        userctx.checkUser()
        if(userctx.userName)
        {
            nav('/Chatroom')
        }
    }, [])
     const handleLogin= ()=>
     {
        userctx.createUser(userName)
        nav('/Chatroom')
     }
    return (
        <form className="flex flex-column align-items-center justify-content-center w-18rem gap-4">
            <MainHeading mainhead="SIGN IN TO ACCOUNT"></MainHeading>
            <InputFieldText id="username"  label="UserName" help="PLease enter username" setValue={setUserName}></InputFieldText>
            <SubmitButton type="Sign In"   onclick={handleLogin}></SubmitButton>
        </form>
    );
}
