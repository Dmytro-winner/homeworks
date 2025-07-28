const User = require("../models/User");


const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};


const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: "User not found" });
};


const createUser = async (req, res) => {
    const { name, email, age } = req.body;
    const user = new User({ name, email, age });
    await user.save();
    res.status(201).json(user);
};


const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.age = req.body.age || user.age;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};


const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await user.remove();
        res.json({ message: "User removed" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};