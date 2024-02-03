import { UserContext } from "../../MainView";
import { useContext, useEffect } from "react";
import { colors } from "../../../../../colors";



const People = ({ chatScreenPersonId, userInfo }) => {
    const { chatPerson } = useContext(UserContext);
    const [chatScreenPerson, setChatScreenPerson] = chatPerson;

    return (
        <div className="w-full flex items-center gap-2 text-white px-4 py-2 my-2 rounded-xl cursor-pointer" style={{ backgroundColor: colors.secondary }} id={`person-${chatScreenPersonId}`} onClick={
            () => {
                const person = document.getElementById(`person-${chatScreenPersonId}`)
                if (`person-${chatScreenPerson}` === person?.id) {
                    console.log("yeah")
                } else {
                    setChatScreenPerson(chatScreenPersonId)
                }
            }
        }>
            <div className="min-w-[36px] min-h-[36px] bg-black rounded-full"></div>
            <div className="flex flex-col justify-evenly w-full">
                <div className="flex justify-between items-center w-[95%]">
                    <span className="font-semibold">{userInfo.name}</span>
                    <span className="text-[0.65rem]">Last seen at {userInfo.lastseen}</span>
                </div>
                <span className="text-xs text-nowrap">{userInfo.recentChat} </span>
            </div>
        </div>
    )
}

const PeoplesComp = ({ userInfo }) => {
    const _peoples = [];
    for (const key in userInfo) {
        _peoples.push(<People chatScreenPersonId={key} userInfo={userInfo[key]} key={key} />)
    }
    return _peoples;
}

const HomePanel = ({ userInfo }) => {
    return (
        <>
            <div className="pb-3 w-full flex flex-col items-center">

                <div className="flex justify-center items-center w-full p-4 max-w-[300px]">
                    <span className="text-xl"> Hi Saurabh!</span>
                </div>
                <input type='textbox' placeholder="Search" className=" w-full max-w-[80%] py-2 px-4 rounded-full outline-none shadow-md text-white" style={{ backgroundColor: colors.secondary }}></input>
            </div>
            <div className="overflow-scroll scroll-smooth no-scrollbar w-full flex items-center flex-col px-8">
                <div className="flex justify-between w-full items-center border-b-2 mb-3 px-2">
                    <span>Chats</span>
                    <span className="rounded-full px-1 text-xs ">5</span>
                </div>
                <div className="w-full">
                    <PeoplesComp userInfo={userInfo} />
                </div>
            </div>
        </>
    )
}


export default HomePanel;