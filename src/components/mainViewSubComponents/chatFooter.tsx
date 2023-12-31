import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineAttachment } from "react-icons/md";
import { PiStickerBold } from "react-icons/pi";
import { RiSendPlane2Line } from "react-icons/ri";


const ChatFooter = () => {
    return (
        <div className="chat-footer">
            <button><IoCameraOutline /></button>
            <input type='text' placeholder='Type you message here...' />
            <button><MdOutlineAttachment /></button>
            <button><PiStickerBold /></button>
            <button><RiSendPlane2Line /></button>
        </div>
    )
}


export default ChatFooter;