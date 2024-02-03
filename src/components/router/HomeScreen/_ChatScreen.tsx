import { FaArrowLeft } from "react-icons/fa";
import { colors } from "../../../colors";
import { IoMdMore } from 'react-icons/io';
import { IoSearch } from "react-icons/io5";
import { MdAdd } from 'react-icons/md';
import { MdAttachment } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { UserContext } from "./MainView";
import { useContext, useRef, useState } from "react";

const __data = [
    {
        isUser: true,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ipsam quo, id dicta nam non deserunt unde rerum enim. Tempore, iste praesentium!',
        time: '3:10 PM',
        isRead: true,
    },
    {
        isUser: false,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ipsam quo, id dicta nam non deserunt unde rerum enim. Tempore, iste praesentium!',
        time: '3:10 PM',
        isRead: null,
    },
    {
        isUser: false,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ipsam quo, id dicta nam non deserunt unde rerum enim. Tempore, iste praesentium!',
        time: '3:10 PM',
        isRead: null,
    },
    {
        isUser: true,
        message: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ipsam quo, id dicta nam non deserunt unde rerum enim. Tempore, iste praesentium!',
        time: '3:10 PM',
        isRead: null,
    },
    {
        isUser: true,
        message: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ipsam quo, id dicta nam non deserunt unde rerum enim. Tempore, iste praesentium!',
        time: '3:10 PM',
        isRead: null,
    },
    {
        isUser: false,
        message: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ipsam quo, id dicta nam non deserunt unde rerum enim. Tempore, iste praesentium!',
        time: '3:10 PM',
        isRead: null,
    },
    {
        isUser: true,
        message: ' 1 56345 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ipsam quo, id dicta nam non deserunt unde rerum enim. Tempore, iste praesentium!',
        time: '3:10 PM',
        isRead: false,
    },
]




const ChatScreenHeader = ({ name, lastseen, setChatScreenPerson }) => {
    return (
        <div className="flex text-white items-center w-full h-[56px]" style={{ backgroundColor: colors.secondary }}>
            <FaArrowLeft className="text-xl mx-4 my-4 cursor-pointer" onClick={() => { setChatScreenPerson(null) }} />
            <div className="h-[32px] w-[32px] bg-black rounded-full"></div>
            <div className="px-4 flex flex-col text-xl"><span>
                {name}
            </span>
                <span className="text-xs">Last Seen at {lastseen}</span>
            </div>
            <IoSearch className='ml-auto m-2 text-2xl' />
            <IoMdMore className='text-3xl m-4' />
        </div>
    )
}
const ChatScreenInput = ({ data, setdata }) => {
    const [inputText, setInputText] = useState('');
    const handler = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handler} className="px-4 flex items-center text-white bottom-0 absolute w-full gap-4 h-56px" style={{ backgroundColor: colors.secondary }}>

            <MdAdd className='text-3xl h-[56px] w-[56px] py-2 p-3 cursor-pointer' />
            <input
                type="textbox"
                autoComplete="off"
                placeholder="Type your message here"
                minLength={1}
                value={inputText}
                onChange={(e) => { setInputText(e.target.value) }}
                id="messageInputTextBox"
                className="bg-white rounded-full px-4 py-2  text-black outline-none w-[calc(85%)]"
                onKeyDown={e => e.key === 'Enter' ? handler : ''} autoFocus />

            <MdAttachment className='h-[56px] w-[56px] p-3 my-2 mx- text-3xl cursor-pointer font-light ml-auto' />
            <RiEmojiStickerLine className='my-2 mx-2 h-[56px] w-[56px] p-3 text-xl cursor-pointer' />
            <button type="submit" className="block" onClick={() => { sendMessage(data, setdata, setInputText); inputText.length > 0 ? setInputText('') : null; }}>
                <IoSend className='h-[56px] w-[56px] py-2 p-4 mx-2 text-xl cursor-pointer' />
            </button>
        </form>
    )
}

const Message = ({ isUser, message, time, isRead }) => {
    return (
        <div className={`w-full p-1`}>
            <div className={`max-w-[40%] w-fit relative flex-col text-wrap break-words p-2 pb-5 mx-2 rounded-xl gap-2 flex showdow-sm ${isUser ? 'ml-auto' : ''}`} style={{ backgroundColor: colors.primary }}>
                <span className="text-wrap w-full">{message}</span>
                <div className="flex gap-2 mt-auto absolute bottom-1 right-2 text-nowrap items-center text-xs clearfix">3:04 PM {isUser ? <CgChevronDoubleRightO className='font-xl' /> : ''}</div>
                <div className="h-0 overflow-hidden">3:04PM  &</div>
            </div>
        </div >)
}

const Messages = ({ className = '', data }) => {
    const elemtns = [];
    // console.log(data)
    data.forEach((msgItem, index) => {
        elemtns.push(
            <Message isUser={msgItem.isUser} message={msgItem.message} time={msgItem.time} isRead={msgItem.isRead} key={index} />
        )
    })
    return <div className={className}>
        <div className="mb-auto w-full"></div>
        {elemtns.reverse()}
    </div>
}

function sendMessage(data, setdata, setInputText) {
    const val = document.getElementById('messageInputTextBox')?.value;
    if (val) {
        setdata([...data, { isUser: true, message: val, time: '9:30 AM', isRead: true }]);
    }
}

const ChatScreen = ({ name, lastseen, recentChats, username }) => {
    const { chatPerson } = useContext(UserContext);
    const [chatScreenPerson, setChatScreenPerson] = chatPerson;
    const [data, setdata] = useState(__data);

    return (
        <div className="w-3/4 relative border-x-4 h-full" style={{ borderColor: colors.secondary }}>
            <ChatScreenHeader name={name} lastseen={lastseen} setChatScreenPerson={setChatScreenPerson} />
            <Messages data={data} className="overflow-scroll  h-[calc(100%-112px)] w-full flex flex-col-reverse no-scrollbar py-4" />
            <ChatScreenInput data={data} setdata={setdata} />
        </div>
    )
}


export default ChatScreen;