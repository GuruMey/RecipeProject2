import styles from "./UserProfile.module.css";
import * as React from "react";
export default function UserNonAdmin() {

    const [profilePicture, setProfilePicture] = React.useState<File | null>(null);


    const ProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProfilePicture(event.target.files[0]);
        }
    };
    return (
        <div>

                <div className={styles.main_profile_container}>
                    <h2>Your profile</h2>
                    <br></br>
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
                    <h3>Your stats</h3>

                    <div className={styles.user_stats_container}>
                        <p>Number of recipes you have created:</p>
                        <p>Number of recipes you have added to your favorites:</p>

                    </div>

                </div>
        </div>
    )
}