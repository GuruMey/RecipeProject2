import UserAdmin from "../components/UserProfile/UserAdmin";
import UserNonAdmin from "../components/UserProfile/UserNonAdmin";
import {useContext} from "react";
import MyContext from "../context/MyContext";

export default function UserDetails() {
    const context:any = useContext(MyContext)
    const isAdmin = context?.globalState?.isAdmin;
    return (
        <div>
            { isAdmin ? <UserAdmin /> : <UserNonAdmin />}
        </div>
    );


}
