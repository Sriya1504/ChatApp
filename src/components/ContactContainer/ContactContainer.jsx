import { Message, ProfileName } from "../Heading/Heading";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import React, { useContext, useRef } from 'react';
import { ChatContext } from "../Context/ChatContext";

export function ContactContainer()
{
    const chatctx = useContext(ChatContext)
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

     return (
        <div className="flex flex-column gap-2 overflow-y-auto">
            {chatctx.contact.map((contact, index) => (
                <div key={index} className="flex h-4rem bg-white">
                    <div className="flex justify-content-start p-3">
                        <Avatar label={contact.name[0]} shape="circle" size="large" style={{ backgroundColor: '#06b6d4', color: '#ffffff' }} />
                    </div>
                    <div className="flex flex-column justify-content-start flex-1 pt-2">
                        <ProfileName contactName={contact.name} />
                        <Message message={contact.lastMesssage} />
                    </div>
                    <div className="flex justify-content-end p-3">
                        <Toast ref={toast} />
                        <Menu model={items} popup ref={menuLeft} id={`popup_menu_${index}`} />
                        <Button icon="pi pi-ellipsis-v" rounded text tooltip="Options" tooltipOptions={{ position: 'bottom' }}
                            onClick={(e) => menuLeft.current.toggle(e)}
                            aria-controls={`popup_menu_${index}`}
                            aria-haspopup />
                    </div>
                </div>
            ))}
        </div>
    );
}