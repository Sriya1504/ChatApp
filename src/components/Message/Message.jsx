export function SendMessage({userName, message, time})
{
    return(
       <div className="flex flex-column align-items-end p-3 gap-1">
        <span className="flex align-items-start text-sm text-indigo-700">{userName}</span>
             <div style={{maxWidth:"60%"}}className="flex flex-row align-self-end p-2  bg-cyan-400 border-round-top border-round-left shadow-4 ">
            <span className="flex align-items-start text-base text-gray-100" >{message}</span>
        </div>
         <span className="flex align-items-start text-xs text-indigo-700">{time}</span>
       </div>
    )
}

export function ReceiveMessage({userName, message, time})
{
     return(
       <div className="flex flex-column align-items-start p-3 gap-1">
        <span className="flex align-items-start text-sm text-indigo-700">{userName}</span>
             <div style={{maxWidth:"60%", backgroundColor:"#374151"}}className="flex flex-row align-self-start p-2  border-round-top border-round-right shadow-4 ">
            <span style={{color:"#dee0e2"}} className="flex align-items-start text-base" >{message}</span>
        </div>
         <span className="flex align-items-start text-xs text-indigo-700">{time}</span>
       </div>
    )
}

