import { CiEdit } from "react-icons/ci";
import { colors } from "../../../colors";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";


const SettingsPage = ({loggedInUser}) => {
    return (
        <div className="flex justify-between w-full h-full gap-8">
            <div className="flex flex-col items-start w-1/6 [&>*]:px-4 [&>*]:py-2 min-w-[250px] [&>*]:w-full text-center text-white" style={{backgroundColor: colors.secondary}} >
                <div className="w-full my-2"><Link to='/'><IoMdArrowBack className='text-2xl'/></Link></div>
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
                <div className="w-[300px] h-[300px] rounded-full bg-white border-2 border-black overflow-hidden">
                    <CiEdit className='w-full h-full p-[130px] hidden hover:'/>
                </div>
                <div>
                    <div className="my-8">
                        <span className="mx-2 text-xs block my-2">Username</span>
                        <div className="p-2 bg-white text-black rounded-xl pr-0 w-fit flex pl-4 border-2">

                        <input className="outline-none" placeholder={loggedInUser.name} id='username'/>
                        <button className="px-4 block" onClick={()=>{
                            document.getElementById('username')?.focus()
                        }}>
                            <CiEdit className="text-xl"/>

                        </button>
                            </div>
                    </div>
                    <div className="my-2">
                        <span className="mx-2 text-xs block my-2">Phone Number</span>
                        <div className="p-2 bg-white text-black rounded-xl pr-0 w-fit flex pl-4 border-2">

                        <input className="outline-none" placeholder={loggedInUser.phoneNumber} id='phonenumber'/>
                        <button className="px-4 block" onClick={()=>{
                            document.getElementById('phonenumber')?.focus()
                        }}>
                            <CiEdit className="text-xl"/>

                        </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;