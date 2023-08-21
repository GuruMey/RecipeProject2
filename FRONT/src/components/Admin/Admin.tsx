import {useContext, useEffect, useState} from "react";
import Link from "next/link";
import MyContext from "../../context/MyContext";
import {deleteUserApi, getAllUsers} from "../../services/userService";
import styles from "./Admin.module.css";
import moment from "moment";

export default function Admin(props: any) {
    const context:any = useContext(MyContext)

    const [users, setUsers] = useState<any[]>([])

    const [filters, setFilters] = useState<any>({
        username: "",
        email: "",
        admin: false,
        user: true,
        createdAfter: ""
    })

    useEffect(() => {
        (async () => {
            try {
                if (!context?.globalState?.admin) {
                    return
                }

                const response = await getAllUsers();

                setUsers(response.data.data.users);
            } catch(error: any) {
                console.log(error)
            }
        })()
    }, [context?.globalState?.admin])

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
            <div className={styles.users_title}>
                <h2>Manage users</h2>
            </div>

            <div className={styles.filters}>
                <div className={styles.filters_title}>Filters:</div>

                <div>
                    <label className={styles.filter_small_title}>Filter by username:</label><br/>
                    <input type={"text"} value={filters.username} onChange={(e) => {
                        setFilters((ps: any) => ({...ps, username: e.target.value}))
                    }} className={"input_medium"} />
                </div>

                <div>
                    <label className={styles.filter_small_title}>Filter by email:</label><br/>
                    <input type={"text"} value={filters.email} onChange={(e) => {
                        setFilters((ps: any) => ({...ps, email: e.target.value}))
                    }} className={"input_medium"} />
                </div>

                <div>
                    <label className={styles.filter_small_title}>Filter by type:</label><br/>
                    <input type={"checkbox"} checked={filters.admin} onClick={() => {
                        setFilters((ps: any) => ({...ps, admin: !ps.admin}))
                    }} /> Admin<br/>
                    <input type={"checkbox"} checked={filters.user} onClick={() => {
                        setFilters((ps: any) => ({...ps, user: !ps.user}))
                    }} /> User<br/><br/>
                </div>
            </div>

            {users.filter((user: any) => {
                if (filters.username !== "" && !user.username.includes(filters.username)) {
                    return false
                }

                if (filters.email !== "" && !user.email.includes(filters.email)) {
                    return false
                }

                if (!filters.admin && !filters.user) {
                    return false
                }

                if (filters.admin && !filters.user) {
                    if (!user.admin) {
                        return false
                    }
                }

                if (!filters.admin && filters.user) {
                    if (user.admin) {
                        return false
                    }
                }

                return true
            }).map((user: any) => <div className={styles.user}>
                <div className={styles.user_top}>
                   <div className={styles.user_info}>
                       <div>{user.username} {user.admin ? "(admin)" : ""} - {user.email}</div>
                   </div>
                    <button onClick={() => deleteUser(user._id)}>Delete</button>
                </div>
                <div className={styles.user_bottom}>
                    Created at {moment(user.createdAt).format("DD/MM/yyyy")}
                </div>
            </div>)}
        </div>
    )

}