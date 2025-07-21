import { Message, ProfileName } from "../Heading/Heading";
import { Avatar } from 'primereact/avatar';


export function ContactContainer()
{
    return(
        <div  className=" flex h-4rem bg-white overflow-y-auto">
            <div className="flex justify-content-start p-3">
                <Avatar label="J" size="medium" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
            </div>
            <div className="flex flex-column justify-content-start pt-2">
                <ProfileName contactName="JohnDoe"></ProfileName>
                <Message message="lorem"></Message>
            </div>
        </div>
    )
}