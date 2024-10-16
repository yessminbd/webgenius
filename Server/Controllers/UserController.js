const UserModel = require('../Models/User');

// Add User
exports.AddUser = async (req, res) => {
    console.log(req.body);
    try {
        // Add new object 
        const UserObject = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };

        // New instance user
        const user = new UserModel(UserObject);

        // Save user in collection
        const createdUser = await user.save();

        return res.status(200).json({ createdUser });
    } catch (error) {
        // Errors
        return res.status(400).json({ error });
    }
};

// Update user
exports.UpdateUser = async (req, res) => {
    try {
        const param = req.params.id;
        const modifiedObject = {
            name: req.body.nom,
            email: req.body.email,
            password: req.body.password
        };

        //Update User with ID 
        const modifiedUser = await UserModel.findByIdAndUpdate(param, modifiedObject, { new: true });

        // Verification
        if (modifiedUser) {
            return res.status(200).json({ message: "User updated successfully", modifiedContact });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res.status(400).json({ error: "Error updating user", details: error });
    }
};


// Get User
exports.GetUser = async (req, res) => {
    try {
        const param = req.params.id;
        const user = await UserModel.findById(param);
        if (user) {
            return res.status(200).json({ message: "User found successfully",user });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};
