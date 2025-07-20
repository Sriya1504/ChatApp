
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { SideBarHeader } from "../Header/Header";
import { ContactContainer } from "../ContactContainer/ContactContainer";

export default function SideBar()
{
    return(
        <div  style={{width:'400px',height:'calc(100vh - 53.6px)'}} className="flex flex-column">
           <SideBarHeader></SideBarHeader>
            <div className="flex bg-white w-full p-3 align-items-center justify-content-center">
            <IconField className="w-full" iconPosition="left" width={"100%"}>
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText placeholder="Search" />
            </IconField>
        </div>
        <div style={{height:"calc(100vh - 179.6px)"}}className="bg-pink-500">
            <ContactContainer></ContactContainer>
        </div>
        </div>
    );
}