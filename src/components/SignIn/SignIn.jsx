
import {  useNavigate } from "react-router-dom";
import { MainHeading, SubHeading, Switching } from "../Heading/Heading";
import { InputFieldPassword, InputFieldText } from "../InputFields/InputFeild";
import SocialIcons from "../SocialIcons/SocialIcons";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useState } from "react";


export default function SignIn() {
    const navigate= useNavigate();
    const [sigInForm, setSignInForm] = useState({
        mail: {
            value: '',
            valid:false,
            help:'Please enter mail',
            error:false
        },
        password: {
            value: '',
            valid: false,
            help:'Please enter password',
            error:false
        },
        isValid:false
    })

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    function isValidPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return regex.test(password);
}

    function setEmail(value) {
        setSignInForm((form)=>{
            let isValid = isValidEmail(value);
            return {
                ...form,
                mail:{
                    value:value,
                    valid:isValid,
                    help:isValid?'':'Please enter valid email',
                    error:!isValid
                }
            }

        })
        validateForm();
    }

    function setPassword(value)
    {
        setSignInForm((form)=>{
            let isValid=isValidPassword(value);
            return{
                ...form,
                password:{
                    value:value,
                    valid:isValid,
                    help:isValid?'':'Please enter valid password',
                    error:!isValid
                }
            }
        })
        validateForm();
    }
    
    function validateForm()
    {
        setSignInForm((form)=>{
            return{
                ...form,
                isValid:(form.mail.valid && form.password.valid)
            }
        })
    }
     const handleLogin = ()=>
     {
        navigate('/Chatroom');
     }

    return (
        <form className="flex flex-column w-18rem gap-4">
            <MainHeading mainhead="SIGN IN TO ACCOUNT"></MainHeading>
            <SubHeading subhead="or use your social credentials to sign in "></SubHeading>
            <SocialIcons></SocialIcons>
            <InputFieldText id="username" error={sigInForm.mail.error} value={sigInForm.mail.value} setValue={setEmail} label="Email" help={sigInForm.mail.help}></InputFieldText>
            <InputFieldPassword id="password" error={sigInForm.password.error} value={sigInForm.password.value} setValue={setPassword}label="password" help={sigInForm.password.help}></InputFieldPassword>
            <SubmitButton type="Sign In"  value={!sigInForm.isValid} onclick={handleLogin}></SubmitButton>
            <Switching message="Dont have an account??" link="SignUp" nextpage="Sign UP!!"></Switching>
        </form>
    );
}
