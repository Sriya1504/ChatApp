import { SideBarName } from "../Heading/Heading";
import { ProfileIcons, SideBarIcons } from "../SocialIcons/SocialIcons";
import 'primeicons/primeicons.css';
export function Header(){
    return(
        <header className="flex align-items-center justify-content-start bg-cyan-500 w-full p-3 shadow-4 font-semibold text-indigo-50">WECHAT APPLICATION</header>
    );
}

export function ProfileHeader()
{
    return(
        <div className="flex align-items-center justify-content-start flex-row gap-3 ">
            <header  style={{flex:"1"}}className="align-items-center justify-content-start text-indigo-50  w-full p-3 ">asdfghj</header>
           <div  className="flex align-items-center justify-content-end">
            <ProfileIcons></ProfileIcons>
           </div>
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