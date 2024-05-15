import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Banner from "../Banner/Banner";
import Registration from "../Registration/Registtration";
import Estate from "../Estate/Estate";
const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/Estate",
                element:<Estate></Estate>,
                loader: () => fetch("/card.json"),
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/",
                element:<Banner></Banner>
            },
            {
                path:"/Registration",
                element:<Registration></Registration>
            }
        ]
    }
])
export default Routes;