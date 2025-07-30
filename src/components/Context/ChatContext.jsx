import { createContext,useState } from "react";

export const ChatContext = createContext(
    {
        contact: [],
        addContact: ()=>{ },
        addMessage: ()=>{ },
        deleteContact: ()=>{ }
    }
)

export const ChatProvider = ({children}) =>
{
    const [contact, setContact] = useState([{
            name:"Sriya(yourself)",
            lastMesssage:"heyThere!!",
            messages:[],
            id:'1'
        }])

    function addContact(name,id)
    {
        setContact((contacts)=>{
            let contactItem= {id,name,lastMesssage:'',messages:[]}
            return [...contacts, contactItem]
        })
    }

    function addMessage(message,id)
    {
        setContact((contacts)=>
        {
            let contactIndex= contacts.findIndex(contact => contact.id===id)
            let newMessage= {userName:contacts[contactIndex].name,msg:message,status:"",time:"",id:Math.random()}
            contacts[contactIndex].messages.push(newMessage)
        })
    }















    return(
        <ChatContext.Provider value={
            {
                contact,
                addContact,
                addMessage
            }
        }>
            {children}
        </ChatContext.Provider>
    )


}