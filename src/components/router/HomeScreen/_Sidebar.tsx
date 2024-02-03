import { colors } from "../../../colors";
import { RiContactsBookLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineColorLens } from "react-icons/md";
import { Link } from "react-router-dom";
import HomePanel from "./sidebar/home/HomePanel";
import { useState } from "react";
import ContactPanel from "./sidebar/contacts/ContactsPanel";


import { IoHomeOutline } from "react-icons/io5";


const Sidebar = ({ userInfo, setChatPerson }) => {
    const [panelMenu, setPanelMenu] = useState('Home');
    let panel = null;
    switch (panelMenu) {
        case 'Home': {
            panel = <HomePanel userInfo={userInfo} />;
            break;
        }
        case 'Contact': {
            panel = <ContactPanel setChatPerson={setChatPerson} />
            break
        }
    }
    return (<div className="w-1/4 h-[100%-1rem] border-l-4 border-y-4 flex min-w-[350px]" style={{ borderColor: colors.secondary }}>

        <div className="text-2xl [&>*]:my-4 [&>*]:mx-2 text-white flex flex-col items-baseline pr-2 hover:[&>*]:opacity-80" style={{ backgroundColor: colors.secondary }}>
            <div className="cursor-pointer" onClick={() => setPanelMenu('Home')}><IoHomeOutline /></div>
            <Link to="" ><CgProfile /></Link>
            <div className="cursor-pointer" onClick={() => setPanelMenu("Contact")}><RiContactsBookLine /></div>
            <Link to={""}><MdOutlineColorLens /></Link>
            <Link to="/settings" ><IoSettingsOutline /></Link>
            <Link to="" ><IoIosHelpCircleOutline /></Link>
        </div>
        <div className="flex flex-col items-center w-full">
            {panel}
        </div>
    </div>)
}


export default Sidebar;