import { Button } from 'primereact/button';

export default function SubmitButton({type,  disabled, onclick})
{
    return(
        <div className="card flex flex-wrap justify-content-center">
            <Button label={type} raised disabled={disabled} onClick={onclick} />
        </div>
    )
}