import {useContext, useEffect, useState} from "react";
import Link from "next/link";
import MyContext from "../../context/MyContext";
import {deleteUserApi, getAllUsers} from "../../services/userService";
import styles from "./Admin.module.css";
import moment from "moment";

export default function Admin(props: any) {
    const context:any = useContext(MyContext)

    const [page, setPage] = useState(1)
    const [users, setUsers] = useState<any[]>([])
    const [nPages, setNPages] = useState<any>(1)

    useEffect(() => {
        (async () => {
            try {
                if (!context?.globalState?.admin) {
                    return
                }

                const response = await getAllUsers(page);

                setUsers(response.data.data.users);

                setNPages(response.data.data.nPages);
            } catch(error: any) {
                console.log(error)
            }
        })()
    }, [context?.globalState?.admin, page])

    async function deleteUser(id: string) {
        try {
            const confirmed = confirm("Are you sure you want to delete this user ?")

            if (!confirmed) {
                return
            }

            await deleteUserApi(id);

            setUsers(ps => ps.filter(user => user._id !== id));
        } catch(error) {
            console.log(error)
            alert("An error occurred while deleting the user")
        }
    }

    if (!context?.globalState?.admin) {
        return <div className={"section"}>
            <br/><br/><br/>
            403: You are not allowed to access this page. <Link href={"/"}><button>Go back home</button></Link>.
            <br/><br/><br/>
        </div>
    }

    return (
        <div className="section">
            <h2>Manage users</h2>

            {users.map((user: any) => <div className={styles.user}>
                {user.username} - {user.email} - {moment(user.createdAt).format("DD/MM/yyyy")} <button onClick={() => deleteUser(user._id)}>Delete</button>
            </div>)}
        </div>
    )

}