import { IntroHeading } from "../Heading/Heading";
import SignIn from "../SignIn/SIgnIn";

function LoginBox()
{
    return(
        <div className="flex align-items-center justify-content-center p-7 ">
            <div style={{width:'800px',height:'600px'}} className=" flex  border-0  border-round overflow-hidden shadow-6">
            <div className=" flex justify-content-center align-items-center h-full w-4 border-circle-right bg-cyan-500 text-center">
                <IntroHeading introhead="WELCOME BACK!! SIGN IN HERE"></IntroHeading>
            </div>
            <div className="flex justify-content-center align-items-center h-full w-9 ">
                <SignIn></SignIn>
            </div>
        </div>
        </div>
        
    );
}

export default LoginBox;