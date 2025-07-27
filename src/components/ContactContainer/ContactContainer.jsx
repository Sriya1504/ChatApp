import { Message, ProfileName } from "../Heading/Heading";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';

export function ContactContainer()
{
    const menuLeft = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Archive Chat',
                    icon: 'pi pi-inbox'
                },
                {
                    label: 'Pin Chat',
                    icon: 'pi pi-thumbtack'
                }
            ]
        }
    ];

    return(
        <div  className=" flex h-4rem bg-white overflow-y-auto">
            <div className="flex justify-content-start p-3">
                <Avatar label="J" size="medium" style={{ backgroundColor: '#06b6d4', color: '#ffffff' }} shape="circle" />
            </div>
            <div className="flex flex-column justify-content-start flex-1 pt-2">
                <ProfileName contactName="JohnDoe"></ProfileName>
                <Message message="lorem" ></Message>
            </div>
            <div className="flex justify-content-end p-3">
                <Toast ref={toast}></Toast>
                <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                <Button icon="pi text-black-alpha-90 pi-ellipsis-v" rounded text  severity=" Filter" aria-label="Add a Peer" tooltip="Options" tooltipOptions={{ position: 'bottom' }} onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
            </div>
        </div>
    )
}