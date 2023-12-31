import { useState } from "react";

const MessageDiv = ({ props }) => {
    return (
        <div className={`message-div ${props.type === 'sender' ? 'right' : 'left'}`} key={props.id}>
            <span className="message">
                {props.messageText}
            </span>
        </div>
    )
}


const ChatBody = ({ messages }) => {
    const elements = []
    for (let message of messages) {
        elements.push(<MessageDiv props={message} key={message.id} />)
    }
    const messagesElement = useState()
    return (
        <div className="chat-body">{elements}</div>
    )
}

export default ChatBody;