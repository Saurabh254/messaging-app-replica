import Header from "../../common/Header/Header"
import MainView from "./MainView"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const HomeScreen = () => {
    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem('access_token');
        if (token == null) {
            navigate('/login')
        }
        console.log(token)

    })
    return (
        <>
            <Header />
            <MainView />
        </>
    )
}


export default HomeScreen;