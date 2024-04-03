import { colors } from "../../../colors";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Profiles from "./Profiles";
import { useState } from "react";
import DevicesComponent from "./Devices";

// 0 -> Profiles
// 1 -> Privacy and Safety
// 2 -> Devices
// 3 -> My Account
// 4 -> Advanced
// 5 -> Help




const SettingsPage = ({ loggedInUser }) => {
    const [settingState, setSettingState] = useState('profiles')
    return (
        <div className="flex justify-between w-full h-full gap-8">
            <div className="flex flex-col items-start w-1/6 [&>*]:px-4 [&>*]:py-2 min-w-[250px] [&>*]:w-full text-center text-white" style={{ backgroundColor: colors.secondary }} onClick={(e) => e.target.classList[0] !== settingState ? setSettingState(e.target.classList[0]) : null} >
                <div className="w-full my-2"><Link to='/'><IoMdArrowBack className='text-2xl' /></Link></div>
                <span className=" border-b-2 mb-2 font-semibold">User Settings</span>
                <button className='profiles'>Profiles</button>
                <button className='privacy_and_safety' >Privacy & Safety</button>
                <button className='devices' >Devices</button>
                <button className='account' >My Account</button>
                <button className="advanced hover:text-gray-400">Advanced</button>
                <button className="help hover:text-gray-400">Help</button>
                <button className='logout' >Log Out</button>
            </div>
            <div className="w-5/6 h-full items-center flex flex-col p-8">
                {settingState == 'profiles' ? <Profiles /> : ""}
                {/* {settingState == 0 ? <PrivacySafety /> : ""} */}
                {settingState == 'devices' ? <DevicesComponent /> : ""}
                {/* {settingState == 0 ? <MyAccountComponent /> : ""} */}
                {/* {settingState == 0 ? <Advanced /> : ""} */}
                {/* {settingState == 0 ? <Help /> : ""} */}
            </div>
        </div >
    )
}

export default SettingsPage;