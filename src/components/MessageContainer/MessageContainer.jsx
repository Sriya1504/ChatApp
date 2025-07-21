import { ProfileHeader } from "../Header/Header";

import { InputFieldPanel } from "../InputFields/InputFeild";
import { ReceiveMessage, SendMessage } from "../Message/Message";


export default function MessageContainer()
{
    return(
        <div className="flex flex-column w-full  justify-content-end">

            <ProfileHeader contactName="John Doe"></ProfileHeader>
            <div style={{height:"548px", backgroundColor:"#f0f0f0"}} className="overflow-y-auto flex flex-column p-3">
                <SendMessage userName="JohnDoe" time="17:27" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></SendMessage>
                <ReceiveMessage userName="JohnDoe" time="17:48" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></ReceiveMessage>
                <SendMessage userName="JohnDoe" time="17:27" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></SendMessage>
                <ReceiveMessage userName="JohnDoe" time="17:48" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></ReceiveMessage>
                <SendMessage userName="JohnDoe" time="17:27" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></SendMessage>
                <ReceiveMessage userName="JohnDoe" time="17:48" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></ReceiveMessage>
                <SendMessage userName="JohnDoe" time="17:27" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></SendMessage>
                <ReceiveMessage userName="JohnDoe" time="17:48" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore cum eius maiores aperiam dignissimos dolor, iure cumque magnam necessitatibus doloremque tenetur ratione dolorum impedit unde suscipit sed distinctio maxime."></ReceiveMessage>
            </div>
            <InputFieldPanel></InputFieldPanel>
        </div>
    )
}
