import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Banner from "../Banner/Banner";
import Registration from "../Registration/Registtration";
import PrivateRoutes from "./PrivateRoutes";
import Card from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";
import Notfound from "../Notfound/Notfound";
import Choose from "../Choose/Choose";
import Explore from "../Explore/Explore";
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
            },
            {
            path:"/card",
            element:<Card></Card>
            },
            {
                path:"/CardDetails/:id",
                element:<PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>
            },
            {
                path:"/",
                element:<Notfound></Notfound>
            },
            {
                path:"/Choose",
                element:<Choose></Choose>
            },
            {
                path:"/explore",
                element:<Explore></Explore>
            }
          
         
         
        ]
    }
])
export default Routes;