import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login"
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store";
import CartItem from "./components/CartItem";
// import InstaMart from "./components/InstaMart";

// Lazy Loading
// Code Splitting
// Dynamic Loading
// OnDemand Loading

const InstaMart = lazy(() => import("./components/InstaMart"))

const AppLayout = () => {
    const [user, setUser] = useState({
        name : "Bharati Singh",
        email : "bharati@gmail.com"
    })

    return (
        <Provider store = {store}>
            <UserContext.Provider value={
                {
                    user : user,
                    setUser : setUser
                }
            }>
                <Header/>
                <Outlet/>
                <Footer/>
            </UserContext.Provider>
        </Provider>

    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}><InstaMart /></Suspense>,
            },
            {
                path: "/cart",
                element : <CartItem/>,
            }

        ]
    },
    {
        path: "/login",
        element: <Login />,
    }


])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>);