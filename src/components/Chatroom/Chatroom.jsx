import { Header } from "../Header/Header";
import MessageContainer from "../MessageContainer/MessageContainer";
import SideBar from "../Sidebar/SideBar";


export default function ChatRoom(){
    return(
        <div className="flex w-screen h-screen absolute flex-column bg-primary">
            <Header></Header>
            <div className="flex  h-full">
                <SideBar></SideBar>
                <div  style={{width:"calc(100vw - 400px)"}}className="flex w-9  bg-green-500">
                    <MessageContainer></MessageContainer>
                </div>
            </div>
        </div>
    )
}