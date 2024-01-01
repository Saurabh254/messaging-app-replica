import { useState } from "react";
import ChatBody from "./mainViewSubComponents/chatBody"
import ChatFooter from "./mainViewSubComponents/chatFooter"
import ChatHead from "./mainViewSubComponents/chatHeader"

const dummy_data = [
    {
        id: '123',
        messageText: 'Hello hi byeHello hi byeHello hi byeHello hi byeHello hi byeHello hi byeHello hi byeHello hi bye',
        at: Date.now(),
        type: 'sender',
    },
    {
        id: '124',
        messageText: 'Hello bol be',
        at: Date.now(),
        type: 'reciver',
    },
    {
        id: "125",
        messageText: "Hello hi",
        at: Date.now(),
        type: 'sender',
    },
];

const MainView = ({ messageUserView }) => {
    const [dummy_data_real, setDummyDataReal] = useState(dummy_data);
    console.log("dummy_data_real" + dummy_data_real);
    if (messageUserView === null) {

        return (
            <div className="mainView">
                <div className="view no-user">Search Peoples and Start Chatting</div>
                <div className="poweredBy no-user">
                    <span>
                        Powered By
                    </span>
                    &#160; Messages API
                </div>
            </div>
        )
    } else {
        console.log(dummy_data_real)
        return <div className="mainView">
            <ChatHead />
            <ChatBody messages={dummy_data_real} />
            <ChatFooter setData={setDummyDataReal} data={dummy_data_real} />
        </div>
    }
}

export default MainView;