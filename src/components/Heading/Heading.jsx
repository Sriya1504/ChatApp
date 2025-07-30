

export function MainHeading({mainhead})
{
    return(

            <span className="text-2xl font-bold text-cyan-500 text-center">{mainhead}</span>
            
    )
}


export function SideBarName({name})
{
    return(
        <span className="text-2xl flex flex-1 font-bold text-cyan-500 text-start">{name}</span>
    )
}

export function ProfileName({contactName})
{
    return(
        <span className="flex text-l font-semibold text-cyan-500 align-items-center">{contactName}</span>
    )
}
export function Message({message})
{
    return(
        <div className="flex align-items-center justif-content-start overflow-hidden">
            <span style={{}} className="text-small font-light text-cyan-400 text-center msg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo culpa quibusdam nemo, dolorem quisquam, eaque veritatis rerum autem cum libero cumque. A inventore ducimus, repellendus vero saepe corporis eos.</span>
        </div>
    )
}





