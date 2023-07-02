import * as React from 'react';
import styles from "./UserProfile.module.css";


export default function UserAdmin() {

    const [profilePicture, setProfilePicture] = React.useState<File | null>(null);


    const ProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProfilePicture(event.target.files[0]);
        }
    };
    return (
        <div>

            <h2>Admin profile</h2>
            <br></br>

            <div>
                <div className={styles.profile_picture_container}>
                    <label>Profile Picture:</label>
                    <div className={styles.current_profile_picture}></div>
                    <input type="file" name="profile-picture" accept="image/*" onChange={ProfilePictureChange} />
                </div>
                <div className={styles.user_info_container}>
                    <p>Username:</p>
                    <p>Email:</p>
                    <p>Account created on:</p>
                </div>
            </div>

            <h3>User Management</h3>

        </div>
    )
}