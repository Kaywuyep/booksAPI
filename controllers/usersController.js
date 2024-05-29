const User = require("../models/users_models");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (!users) {
            return res.status(400).json({ message: `${User} not found!!`})
        }
        res.status(200).json(users)

    } catch(error){
        res.status(500).json({message: error.message})
    }
};
const getUsersById = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({_id: id});
        if (!userExist) {
            return res.status(400).json({ message: "User does not Exist!!"})
        }
        const userId = await User.findById(id);
        res.status(200).json(userId);
    } catch(error) {
        res.status(500).json({message: error.message});   
    }
};

const createUser = async (req, res) => {
    try {
        const { username, password, firstName, lastName } = req.body;

        // Check if the necessary fields are present
        if (!username || !password || !firstName || !lastName) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if user already exists
        const userExist = await User.findOne({ username });
        if (userExist) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Hash password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user object
        const newUser = new User({
            username,
            password: hashedPassword,
            firstName,
            lastName
        });

        // Save new user
        await newUser.save();

        res.status(201).json({ message: "User successfully added", user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const data = {
            name: req.body.username,
            password: req.body.password
        }
        const check = await User.findOne({ name: req.body.username });
        if (!check) {
            res.send('Username cannot be found');
        }
        // compare the harshed password from the db
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send('Wrong password');
        } else {
            res.send("your dashboard")
            //res.render('dashboard');
        }
    } catch {
        res.status(400).json({ message: 'Wrong Details'});
    }
};

const updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({ _id: id });
        if (!userExist) {
            return res.status(400).json({ message: "User does not exists!!" });
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({ message: "User profile updated successfully!!"})
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUsers = async (req, res) => {
    try {
        const id = req.params.id;

        const userExist = await Book.findOne({ _id: id });

        if (!userExist) {
            return res.status(404).json({ message: "User does not exist!"})
        }
        const deleteUser = await Book.findByIdAndDelete(id);

        if (!deleteUser) {
            return res.status(404).json({ error: "User not found!"})
        }
        res.status(200).json({ message: "User successfully deleted!"});
    } catch(error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {getUsers, getUsersById, createUser, loginUser, updateById, deleteUsers};