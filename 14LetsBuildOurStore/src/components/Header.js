import {useState, useContext} from "react";
import logo from "../assets/image/logo.png"
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
export const Title = () => {
    return (
        <img
            className="h-28 w-28 p-2"
            src={logo}
            alt="Logo"/>
    );
}

const Header = () => {
    // const [title, setTitle] = useState("Food villa");
    const [logIn, setLogIn] = useState(true);
    const isOnline = useOnline();
    //console.log(logIn)
    const {user} = useContext(UserContext)

    const cartItems = useSelector(store => store.cart.items)
    // subscribing to the cartSlice
    console.log(cartItems)



    return (
        <div className="flex justify-between items-center bg-amber-400 shadow-xl">
            <Title/>
            {/*<h1>{title}</h1>*/}
            {/*<button onClick={() => setTitle("New Title")}>Change Title</button>*/}
            <div className="p-2">
                <ul  className="flex justify-between">

                    <li className="p-3 font-bold hover:text-orange-700"><Link to="/">Home</Link> </li>
                    <li className="p-3 font-bold hover:text-orange-700"><Link to="/about">About Us</Link></li>
                    <li className="p-3 font-bold hover:text-orange-700"><Link to="/contact">Contact</Link></li>
                    <li className="p-3 font-bold hover:text-orange-700"><Link to="/instamart">InstaMart</Link></li>
                    <li className="p-3 font-bold hover:text-white hover:bg-amber-600 rounded">
                        {logIn ? (
                            <button
                                className="logout-btn"
                                onClick={() => setLogIn(false)}
                            >Log out
                            </button>
                        ):(
                            <button
                                className="login-btn"
                                onClick={() => setLogIn(true)}
                            >LogIn
                            </button>
                        )
                        }
                        <span className="p-3 h-0.5 w-0.5">{isOnline ? "🟢" : "🔴"}</span>
                    </li>
                    <li className="p-3 font-bold hover:text-orange-700"><Link to="/cart">Cart {cartItems.length} - Items</Link></li>


                </ul>
            </div>

        </div>
    );
}

export default Header;