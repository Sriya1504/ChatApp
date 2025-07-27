import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
export  function SocialIcons()
{
    return(
        <div className="flex align-items-center justify-content-center gap-5">
            <i className="pi text-black-alpha-90 pi-facebook"></i>
            <i className="pi text-black-alpha-90 pi-google"></i>
            <i className="pi text-black-alpha-90 pi-github"></i>
        </div>
    )
}
export function SideBarIcons()
{
    return(
        <div className="flex align-items-center justify-content-end gap-3">
            <Button icon="pi text-black-alpha-90 pi-filter" rounded text  severity=" Filter" aria-label="FilterChats" tooltip="FilterChats" tooltipOptions={{ position: 'bottom' }} />
            <Button icon="pi text-black-alpha-90 pi-user-plus" rounded text  severity=" Filter" aria-label="Add a Peer" tooltip="Add A Peer" tooltipOptions={{ position: 'bottom' }} />
        </div>
    )
}
export function ProfileIcons()
{
    const menuLeft = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            label: 'Settings',
            items: [
                {
                    label: 'Edit Contact',
                    icon: 'pi pi-pen-to-square'
                },
                {
                    label: 'Block Contact',
                    icon: 'pi pi-ban'
                }
            ]
        }
    ];
    return (
        <div className="flex align-items-center justify-content-end gap-5">
           <Button icon="pi text-black-alpha-90 pi-phone" rounded text  severity=" Filter" aria-label="AudioCall" tooltip="Start Audio call?" tooltipOptions={{ position: 'bottom' }} />
           <Button icon="pi text-black-alpha-90 pi-video" rounded text  severity=" Filter" aria-label="VideoCall" tooltip="Start Video Call?" tooltipOptions={{ position: 'bottom' }} />
           <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
           <Button icon="pi text-black-alpha-90 pi-cog" rounded text  severity=" Filter" aria-label="Settings" tooltip="Settings" tooltipOptions={{ position: 'bottom' }} onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
        </div>
    )
}





