import { colors } from "../../../colors";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Profiles from "./Profiles";

const SettingsPage = ({ loggedInUser }) => {
    return (
        <div className="flex justify-between w-full h-full gap-8">
            <div className="flex flex-col items-start w-1/6 [&>*]:px-4 [&>*]:py-2 min-w-[250px] [&>*]:w-full text-center text-white" style={{ backgroundColor: colors.secondary }} >
                <div className="w-full my-2"><Link to='/'><IoMdArrowBack className='text-2xl' /></Link></div>
                <span className=" border-b-2 mb-2 font-semibold">User Settings</span>
                <button >My Account</button>
                <button >Profiles</button>
                <button >Privacy & Safety</button>
                <button >Devices</button>
                <button >Language</button>
                <button className="hover:text-gray-400">Advanced</button>
                <button >Log Out</button>
            </div>
            <div className="w-5/6 h-full items-center flex flex-col p-8">
                {<Profiles />}
            </div>
        </div>
    )
}

export default SettingsPage;