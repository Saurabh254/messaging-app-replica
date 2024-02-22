import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen/base";
import SettingsPage from "./settings/Main.js";
import { LoggedInUser } from "../../utils/loggedInUser.tsx";
import LoginScreen from "../router/loginScreen/loginScreen.tsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />
    },
    {
        path: "/settings",
        element: <SettingsPage loggedInUser={LoggedInUser} />
    },
    {
        path: "/login",
        element: <LoginScreen />
    }
])


export default router;