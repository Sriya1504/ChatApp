
import { useContext } from "react";
import { ProfileHeader } from "../Header/Header";
import { InputFieldPanel } from "../InputFields/InputFeild";
import { ReceiveMessage} from "../Message/Message";
import { ChatContext } from "../Context/ChatContext";


export default function MessageContainer()
{
    const chatctx = useContext(ChatContext)
    return(
        <div className="flex flex-column w-full  justify-content-end">
             {chatctx.contact.map((contact, i) => (
                <div key={i} className="flex flex-column">
                <ProfileHeader contactName={contact.name}></ProfileHeader>
            <div style={{height:"548px", backgroundColor:"#f0f0f0"}} className="overflow-y-auto flex flex-column p-3">
                <ReceiveMessage userName={contact.name} time="17:48" message={contact.messages}></ReceiveMessage>
            </div>
            </div>
             ))}
            <InputFieldPanel></InputFieldPanel>
        </div>
    )
}
