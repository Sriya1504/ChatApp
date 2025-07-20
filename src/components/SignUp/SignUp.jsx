import { useNavigate } from "react-router-dom";
import { MainHeading, Switching } from "../Heading/Heading";
import { InputFieldPassword, InputFieldText } from "../InputFields/InputFeild";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useState } from "react";


export default function SignUp() {
    const navigate= useNavigate();
    const [signUpForm, setSignUpForm] = useState({
        mail: {
            value: '',
            valid: false,
            help: "Please enter mail",
            error: false
        },
        password: {
            value: '',
            valid: false,
            help: "Please enter password",
            error: false
        },
        confirmPassword: {
            value: '',
            valid: false,
            help: "Confirm your password",
            error: false
        },
        isValid: false
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
        setSignUpForm((form) => {
            const isValid = isValidEmail(value)
            return {
                ...form,
                mail: {
                    value: value,
                    valid: isValid,
                    help: isValid ? '' : 'Please enter valid email',
                    error: !isValid
                }
            }
        })
        validateForm()
    }

    function setPassword(value) {
        setSignUpForm((form) => {
            let isValid = isValidPassword(value)
            return {
                ...form,
                password: {
                    value: value,
                    valid: isValid,
                    help: isValid ? '' : 'Please enter valid password',
                    error: !isValid
                }
            }
        })
        validateForm()
    }

    function setConfirmPassword(value)
    {
        setSignUpForm((form) => {
            let isValid = isValidPassword(value) && value === form.password.value
            return {
                ...form,
                confirmPassword: {
                    value: value,
                    valid: isValid,
                    help: isValid ? '' : 'Passwords donot match',
                    error: !isValid
                }
            }
        })
        validateForm()
    }

    function validateForm()
    {
        setSignUpForm((form)=>{
            return{
                ...form,
                isValid:(form.mail.valid && form.password.valid && form.confirmPassword.valid)
            }
        })
    }



const handleSignUp = ()=>
     {
        navigate('/');
     }

    return (
        <form className="flex flex-column w-18rem gap-4">
            <MainHeading mainhead="SIGN TO ACCOUNT"></MainHeading>
            <InputFieldText id="username" label="mail" error={signUpForm.mail.error} value={signUpForm.mail.value} setValue={setEmail} help={signUpForm.mail.help}></InputFieldText>
            <InputFieldPassword id="password" label="password" error={signUpForm.password.error} value={signUpForm.password.value} setValue={setPassword} help={signUpForm.password.help}></InputFieldPassword>
            <InputFieldPassword id="confirmpassword" label="confirmpassword" error={signUpForm.confirmPassword.error} value={signUpForm.confirmPassword.value} setValue={setConfirmPassword} help={signUpForm.confirmPassword.help}></InputFieldPassword>
            <SubmitButton type="Sign Up"  disabled={!signUpForm.isValid} onclick={handleSignUp}></SubmitButton>
            <Switching message="Already have an account??" link="/" nextpage="Sign IN!!"></Switching>
        </form>
    );
}