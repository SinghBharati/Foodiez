import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="font-bold text-center align-middle">
            <div className="h-12 bg-amber-400">
                Created By
                <i className="p-2 fa fa-heart text-red-600"></i>
                {/*<a href="#" >*/}
                {/*    Bharati*/}
                {/*</a>*/}
                <a href="#">{user.name}</a>
                <i className="p-3 fa fa-copyright"></i>2023
                <strong>
                    Food<span>Villa</span>
                </strong>
            </div>
        </div>
    );
}

export default Footer;