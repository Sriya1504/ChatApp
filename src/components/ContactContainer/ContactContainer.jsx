import { Message, ProfileName } from "../Heading/Heading";

export function ContactContainer()
{
    return(
        <div  className=" flex h-4rem bg-white">
            <div className="flex align-items-center justify-content-start p-3">
                <i  style={{color:"black"}}className=" pi pi-user"></i>
            </div>
            <div className="flex flex-column">
                <ProfileName contactName="JohnDoe"></ProfileName>
                <Message message="dfghjkl;"></Message>
            </div>
        </div>
    )
}