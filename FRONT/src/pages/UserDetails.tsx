import UserAdmin from "../components/UserAccount/UserAdmin";
import UserNonAdmin from "../components/UserAccount/UserNonAdmin";

export default function UserDetails() {
    return (
        <div>
            <h1>UserDetails</h1>
            <UserAdmin/>
            <UserNonAdmin/>
        </div>
    );
}
