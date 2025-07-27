
import {  useNavigate } from "react-router-dom";
import { MainHeading } from "../Heading/Heading";
import {  InputFieldText } from "../InputFields/InputFeild";
import SubmitButton from "../SubmitButton/SubmitButton";


export default function SignIn() {
    const navigate= useNavigate();

    
     const handleLogin= ()=>
     {
        navigate('/Chatroom');

     }
    return (
        <form className="flex flex-column align-items-center justify-content-center w-18rem gap-4">
            <MainHeading mainhead="SIGN IN TO ACCOUNT"></MainHeading>
            <InputFieldText id="username"  label="UserName" help="PLease enter username"></InputFieldText>
            <SubmitButton type="Sign In"   onclick={handleLogin}></SubmitButton>
        </form>
    );
}
