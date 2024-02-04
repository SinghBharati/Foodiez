import {createContext} from "react";

const UserContext = createContext({
    user : {
        name : "Default Name",
        email : "defaultemail.com"
    }
})
export default UserContext;