import dummyImage from '../assets/whatsapp.png';
import { IoMenu } from "react-icons/io5";


// contacts dummy

const contacts = [{
    id: 12,
    profileUrl: "https://",
    username: "Saurabh",
    dummyMessage: "get latest mobiles at low price",
    activeStatus: true,
},
{
    id: 13,
    profileUrl: "https://",
    username: "Saurabh",
    dummyMessage: "get latest mobiles at low price",
    activeStatus: true,
},
{
    id: 14,
    profileUrl: "https://",
    username: "Saurabh",
    dummyMessage: "get latest mobiles at low price",
    activeStatus: true,
},
{
    id: 15,
    profileUrl: "https://",
    username: "Saurabh",
    dummyMessage: "get latest mobiles at low price",
    activeStatus: true,
},
{
    id: 16,
    profileUrl: "https://",
    username: "Saurabh",
    dummyMessage: "get latest mobiles at low price",
    activeStatus: true,
},]
const IsAliveStatus = ({ activeStatus }) => {
    if (activeStatus) {
        return (<div className="status">
            <div className="statuscircle" color="green"></div>Active Now
        </div>)
    }
    return '';
}
const ContactDiv = ({ item }) => {
    return (
        <li className="contact">
            <img className="userimage" src={dummyImage} />
            <div className="userInfo">
                <div className="userStatus">
                    <span className="username">{item.username}</span>
                    <div><IsAliveStatus activeStatus={item.activeStatus} /></div>
                </div>
                <span className="dummyMessage"> {item.dummyMessage}...</span>
            </div>
        </li>
    )
}
const ContactsList = (url) => {
    const arr = [];
    for (let item of contacts) {
        arr.push(<ContactDiv item={item} key={item.id} />)

    }
    return arr;
}


const Sidebar = () => {
    return (<div className="sidebar">
        <div className="menu">
            <div className="icon"><IoMenu /></div>
            <span>Hi Saurabh!</span>
        </div>
        <input placeholder="Search Peoples" />
        <ul className="recent-contacts">
            {<ContactsList url='sljfs' />}
        </ul>
    </div>)
}

export default Sidebar;