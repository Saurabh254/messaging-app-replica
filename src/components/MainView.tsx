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
    // console.log(messageUserView)
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
        return <div className="mainView">
            <ChatHead />
            <ChatBody messages={dummy_data} />
            <ChatFooter />
        </div>
    }
}

export default MainView;