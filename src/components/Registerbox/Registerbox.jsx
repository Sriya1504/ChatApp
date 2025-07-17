import { IntroHeading } from "../Heading/Heading";
import SignUp from "../SignUp/SignUp";

function RegisterBox()
{
    return(
        <div style={{width:'800px',height:'600px'}} className=" flex  border-0  border-round overflow-hidden shadow-6">
            <div className=" flex justify-content-center align-items-center h-full w-4 border-circle-right bg-cyan-500 text-center">
                <IntroHeading introhead="HELLO THERE!! SIGN UP HERE"></IntroHeading>
            </div>
            <div className="flex justify-content-center align-items-center h-full w-9 ">
                <SignUp></SignUp>
            </div>
        </div>
        
    );
}

export default RegisterBox;