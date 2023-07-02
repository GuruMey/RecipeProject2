import UserModel from "../models/UserModel.js";


//----------------- EDIT USER ----------------- //
const editUser = async (req, res) => {
    const { userId } = req.params;
    const { field, value } = req.body;

    console.log('Je suis le 2e console.log de userController.js')

    try {
        // Check if user already exists in db
        const existingUser = await UserModel.findById(userId);

        console.log('Je suis le 3e console.log de userController.js')

        if (!existingUser) {
            return res.status(404).json({ message: "Cannot find user" });
        }

        console.log('Je suis le 4e console.log de userController.js')

        // Update the selected field
        switch (field) {
            case "username":
                existingUser.username = value;
                break;
            case "password":
                existingUser.password = value;
                break;
            case "email":
                existingUser.email = value;
                break;
            case "admin":
                existingUser.admin = value;
                break;
            case "profilePicture":
                existingUser.profilePicture = value;
                break;
            default:
                return res.status(400).json({ message: "Invalid field" });
        }

        console.log('Je suis le 5e console.log de userController.js')

        // Save the updated user in db
        await existingUser.save();

        console.log('Je suis le 6e console.log de userController.js')


        res.status(200).json({ message: "Utilisateur mis à jour avec succès", user: existingUser });
    } catch (error) {
        // Handle errors
        console.error("Une erreur s'est produite lors de la mise à jour de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
};



//----------------- DELETE USER ----------------- //
const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        // Check if user exists in db
        const existingUser = await UserModel.findById(userId);

        if (!existingUser) {
            return res.status(404).json({ message: "Cannot find user" });
        }

        // Delete the user
        await UserModel.findByIdAndRemove(userId);

        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        // Handle errors
        console.error("Une erreur s'est produite lors de la suppression de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
};



export {editUser, deleteUser};