import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen/base";
import SettingsPage from "./settings/Settings";
import {LoggedInUser} from "../../utils/loggedInUser.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />
    },
    {
        path: "/settings",
        element: <SettingsPage loggedInUser={LoggedInUser}/>
    }
])


export default router;