import { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineAttachment } from "react-icons/md";
import { PiStickerBold } from "react-icons/pi";
import { RiSendPlane2Line } from "react-icons/ri";

function sendMessage(data, setData, message, setMessage) {
    if (message.length !== 0) {
        setData([...data, {
            id: "124",
            messageText: message,
            at: Date.now(),
            type: 'sender',
        }])
        setMessage('');
    }
}
const ChatFooter = ({ data, setData }) => {
    const [message, setMessage] = useState('');

    function eventHandler(event) {
        setMessage(event.target.value)
    }
    return (
        <div className="chat-footer">
            <button><IoCameraOutline /></button>
            <input type='text' placeholder='Type you message here...' value={message} onChange={eventHandler} />
            <button><MdOutlineAttachment /></button>
            <button><PiStickerBold /></button>
            <button onClick={() => sendMessage(data, setData, message, setMessage)}><RiSendPlane2Line /></button>
        </div>
    )
}


export default ChatFooter;