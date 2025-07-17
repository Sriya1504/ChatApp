import { Link } from "react-router-dom"

export function MainHeading({mainhead})
{
    return(

            <span className="text-2xl font-bold text-cyan-500 text-center">{mainhead}</span>
            
    )
}
export function SubHeading({subhead})
{
    return(
            <span className="text-base font-light text-cyan-400 text-center">{subhead}</span>
    )
}
export function Switching({message,nextpage,link})
{
    return(
        <span className="text-base font-light text-cyan-400 text-center no-underline">{message}<Link to={link}>{nextpage}</Link></span>
    )
}

export function IntroHeading({introhead})
{
    return(
        <span className="text-2xl font-bold text-primary-50 text-center">{introhead}</span>
    )
}