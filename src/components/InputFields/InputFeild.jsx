import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";
import { Button } from 'primereact/button';


export function InputFieldText({ id, label,value, setValue , help ,error}) {
    return (
        <div className="flex flex-column gap-2">
            <label className="capitalize" htmlFor={id}>{label}</label>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} id={id} aria-describedby={`${label}-help`} />
            <small id={`${id}-help`} style={{height:'18px'}} className={error?'text-red-500':''}>
                {help}
            </small>
        </div>
    )
}
export function InputFieldPassword({ id, label, help, value, setValue, error }) {
    return (
        <div className="flex flex-column gap-2">
            <label className="capitalize" htmlFor={id}>{label}</label>
            <Password className="w-full" id={id} aria-describedby={`${label}-help`} feedback={false} value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
            <small id={`${id}-help`} style={{height:'18px'}} className={error?'text-red-500':''}>
                {help}
            </small>
        </div>
    )
}

export function InputFieldPanel({id, label,value, setValue})
{
    const chatctx= useContext(ChatContext)
    function sendMessage()
    {
        let msg = document.querySelector("#message").value
        chatctx.addMessage(msg,'1')
    }
    return(
        <div className="flex flex-row p-3 gap-2 w-full h-4rem bg-white">
            <div className="flex align-items-center justify-content-start">
                <i  style={{color:"black"}}className="pi pi-face-smile"></i>
            </div>
            <InputText id="message" />
            <div className="flex align-items-center justify-content-end">
                 <Button icon onClick={sendMessage} text className="pi pi-send"></Button>
            </div>
        </div>
    )
}