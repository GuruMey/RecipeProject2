import UserModel from "../models/UserModel.js";

//----------------- EDIT USER ----------------- //
const editUser = async (req, res) => {
    const receivedUserId = req.params.userId;
    const fieldValuesToUpdate = req.body.fieldValuesToUpdate;

    // todo: validate fieldValuesToUpdate

    try {
        await UserModel.updateOne({ _id: receivedUserId }, fieldValuesToUpdate);

        res.status(200).json({ message: "Utilisateur mis à jour avec succès", user: "existingUser" });
    } catch (error) {
        // Handle errors
        console.error("Une erreur s'est produite lors de la mise à jour de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
    }
};

//----------------- DELETE USER ----------------- //
const deleteUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const existingUser = await UserModel.findByIdAndRemove(userId);

        if (!existingUser) {
            return res.status(404).json({ message: "Cannot find user" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
};

export {editUser, deleteUser};
