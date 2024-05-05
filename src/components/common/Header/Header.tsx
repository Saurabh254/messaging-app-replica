import { colors } from "../../../colors";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={`w-full px-4 py-2 flex justify-between h-[60px] `} style={{ backgroundColor: colors.primary }}>
            <div className="flex items-center gap-4">
                <div className="bg-black w-[36px] h-[36px] rounded-full"></div>
                <span className="text-xl">Messenger Desktop</span>
            </div>
            <div className="flex gap-4 text-white " >
                <button className='rounded-lg px-6 text-sm py-2' onClick={() => navigate('/login')} style={{ backgroundColor: colors.secondary }}>Login</button>
                <button className='rounded-lg px-6 text-sm py-2' onClick={() => navigate('/login')} style={{ backgroundColor: colors.secondary }}>Sign up</button>
            </div>
        </div>
    )
}

export default Header;