import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useContext, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { ChatContext } from '../Context/ChatContext';
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

export function SideBarIcons() {
    const chatctx = useContext(ChatContext);
    const [visible, setVisible] = useState(false);
    function addPeer()
    {
        let value= document.querySelector('#username').value;
        chatctx.addContact(value);
    }
    return (
        <div className="flex align-items-center justify-content-end gap-3">
            <Button 
                icon="pi text-black-alpha-90 pi-filter" 
                rounded text  
                aria-label="FilterChats" 
                tooltip="FilterChats" 
                tooltipOptions={{ position: 'bottom' }} 
            />
            <Button 
                icon="pi text-black-alpha-90 pi-user-plus" 
                rounded text  
                aria-label="Add a Peer" 
                tooltip="Add A Peer" 
                tooltipOptions={{ position: 'bottom' }} 
                onClick={() => setVisible(true)} 
            />
            <Dialog
                visible={visible}
                modal
                onHide={() => {if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="username" label="UserName" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Add-peer" onClick={addPeer} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    );
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





