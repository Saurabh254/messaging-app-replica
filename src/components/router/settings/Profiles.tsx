import { CiEdit } from "react-icons/ci"
import { LoggedInUser } from '../../../utils/loggedInUser.tsx';
import ProfilePhoto from '../../../images/img.png';


const Profiles = () => {
    return (
        <div className="w-5/6 h-full items-center flex flex-col p-8">
            <div className="w-[300px] h-[300px] rounded-full bg-white border-2 border-black overflow-hidden cursor-pointer relative hover:[&>*]:opacity-80">
                <CiEdit className='w-full h-full p-[120px] text-teal-50 font-bold z-1 absolute bg-black' />
                <img src={ProfilePhoto} className="w-full h-full hover:opacity-50 absolute top-0 bottom-0 z-0 object-contain aspect-square" />
            </div>
            <div>
                <div className="my-8">
                    <span className="mx-2 text-xs block my-2">Username</span>
                    <div className="p-2 bg-white text-black rounded-xl pr-0 w-fit flex pl-4 border-2">
                        <input className="outline-none" placeholder={LoggedInUser.name} id='username' />
                        <button className="px-4 block" onClick={() => {
                            document.getElementById('username')?.focus()
                        }}>
                            <CiEdit className="text-xl" />
                        </button>
                    </div>
                </div>
                <div className="my-2">
                    <span className="mx-2 text-xs block my-2">Phone Number</span>
                    <div className="p-2 bg-white text-black rounded-xl pr-0 w-fit flex pl-4 border-2">
                        <input className="outline-none" placeholder={LoggedInUser.phoneNumber} id='phonenumber' />
                        <button className="px-4 block" onClick={() => {
                            document.getElementById('phonenumber')?.focus()
                        }}>
                            <CiEdit className="text-xl" />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profiles;