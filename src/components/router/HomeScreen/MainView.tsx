import ChatScreen from "./_ChatScreen";
import Sidebar from "./_Sidebar";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { colors } from "../../../colors";


export const UserContext = createContext();
const userInfo = {
    1234: {
        name: "Saurabh",
        username: "saurabh254",
        lastseen: '17:12',
        recentChat: 'Lorem ipsum dolor sit amet.',
    },
    1235: {
        name: "rohan",
        username: "rohan030",
        lastseen: "17:12",
        recentChat: 'Lorem ipsum dolor sit amet.'
    },
    1236: {
        name: "rohan",
        username: "rohan030",
        lastseen: "17:12",
        recentChat: 'Lorem ipsum dolor sit amet.'
    },
    1237: {
        name: "rohan",
        username: "rohan030",
        lastseen: "17:12",
        recentChat: 'Lorem ipsum dolor sit amet.'
    },
    1238: {
        name: "rohan",
        username: "rohan030",
        lastseen: "17:12",
        recentChat: 'Lorem ipsum dolor sit amet.'
    },
}
const NoChatSelectedScreen = () => {
    return (
        <div className="flex items-center p-8 flex-col justify-center border-4 w-3/4 relative" style={{ borderColor: colors.secondary }}>
            <span className="absolute text-xl">
                Select a chat to start Messaging
            </span>
            <span className="mt-auto">
                Powered by Messaging API
            </span>
        </div>
    )
}
const MainView = () => {
    const [chatScreenPerson, setChatScreenPerson] = useState(null); // person-1234
    return (
        <UserContext.Provider value={{ chatPerson: [chatScreenPerson, setChatScreenPerson] }} >
            <div className="h-[calc(100%-60px)] flex">
                <Sidebar userInfo={userInfo} setChatPerson={setChatScreenPerson} />
                {chatScreenPerson ? <ChatScreen {...userInfo[chatScreenPerson]} setChatScreenPerson={setChatScreenPerson} /> : <NoChatSelectedScreen />}
            </div>
        </UserContext.Provider>
    )
}


export default MainView;