import { SideBarName } from "../Heading/Heading";
import { ProfileIcons, SideBarIcons } from "../SocialIcons/SocialIcons";
import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar';
export function Header(){
    return(
        <header className="flex align-items-center justify-content-start bg-cyan-500 w-full p-3 shadow-4 font-semibold text-indigo-50">WECHAT APPLICATION</header>
    );
}

export function ProfileHeader({contactName})
{
    return(
        <div className="flex flex-row p-3 gap-3 h-4rem bg-white">
            <Avatar label="J" size="medium" style={{ backgroundColor: '#06b6d4', color: '#ffffff' }} shape="circle" className="flex align-items-center"/>
            <span className="flex text-l flex-1  font-semibold text-cyan-500 align-items-center">{contactName}</span>
            <ProfileIcons></ProfileIcons>
        </div>
    )
}


export function SideBarHeader()
{
    return(
        <div style={{height:"50px"}} className="flex align-items-center bg-white p-3">
            <SideBarName name="Chats" ></SideBarName>
            <SideBarIcons></SideBarIcons>
        </div>
    )
}