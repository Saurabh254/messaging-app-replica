import { colors } from "../../../../../colors"

const Contacts = {
    0: {
        "id": 0,
        "name": "Saurabh",
        "profilePicture": "someurl",
        "about": "python developer"
    },
}

const Contact = ({ name, profilePicture, about, setChatPerson }) => {
    return <div className="w-full h-[56px] text-white rounded-xl flex items-center px-3 my-2 cursor-pointer" onClick={() => setChatPerson('Saurabh')} style={{ backgroundColor: colors.secondary }}>
        <div className="w-[36px] h-[36px] rounded-full bg-black"></div>
        <div className="flex flex-col px-2">
            <span>{name}</span>
            <span className="text-xs opacity-80">{about}</span>
        </div>
    </div>
}

const ContactPanel = ({ setChatPerson }) => {
    return (
        <>
            <input placeholder="Search" className="rounded-full border-2 w-[80%] px-3 py-1 border-gray-200 mt-4" />
            <div className="w-[80%] flex justify-between py-4 pt-4 border-b-2 border-gray-200 pb-1 items-center mb-3">
                <span>Contacts</span>
                <span className="text-xs">119</span>
            </div>
            <div className="w-[80%] py-2 overflow-scroll no-scrollbar pt-0">
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />
                <Contact {...Contacts[0]} setChatPerson={setChatPerson} />

            </div>

        </>
    )
}


export default ContactPanel;