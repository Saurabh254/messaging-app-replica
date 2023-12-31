import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
const dummyImage = '/src/assets/flipkart.jpeg';

const ChatHead = () => {
    return (
        <div className="chat-head">
            <button><FaArrowLeft /></button>
            <button className='user'>
                <img className='userImage' src={dummyImage} />
                <div className='userInfo'>
                    <div className='username'>
                        Flipkart
                    </div>
                    <div className='status'>
                        <div className='green-circle'></div>
                        Active Now
                    </div>
                </div>
            </button>
            <button className='chatSearch'>
                <FaSearch />
            </button>
            <button className='chatMore'>
                <IoMdMore />
            </button>
        </div>
    )
}

export default ChatHead;