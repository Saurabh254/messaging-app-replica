import { colors } from "../../../colors";
import { RiContactsBookLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineColorLens } from "react-icons/md";
import { Link } from "react-router-dom";
import HomePanel from "./sidebar/home/HomePanel";



const Sidebar = ({ userInfo }) => {


    return (<div className="w-1/4 h-[100%-1rem] border-l-4 border-y-4 flex min-w-[350px]" style={{ borderColor: colors.secondary }}>

        <div className="text-2xl [&>*]:my-4 [&>*]:mx-2 text-white flex flex-col items-baseline pr-2" style={{ backgroundColor: colors.secondary }}>
            <Link to="" ><CgProfile /></Link>
            <Link to="" ><RiContactsBookLine /></Link>
            <Link to={""}><MdOutlineColorLens /></Link>
            <Link to="/settings" ><IoSettingsOutline /></Link>
            <Link to="" ><IoIosHelpCircleOutline /></Link>
        </div>
        <div className="flex flex-col items-center w-full">
            <HomePanel userInfo={userInfo} />
        </div>
    </div>)
}


export default Sidebar;