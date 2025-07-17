import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';


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
