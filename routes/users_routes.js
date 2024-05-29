const express = require("express");
const User = require("../models/users_models");
const router = express.Router();
const {
    getUsers,
    getUsersById,
    createUser,
    loginUser,
    updateById,
    deleteUsers,
} = require("../controllers/usersController");

router.get("/", getUsers);

router.get("/:id", getUsersById);

router.post("/signup", createUser);

router.post("/login", loginUser);

router.put("/update/:id", updateById)

router.delete("/delete/:id", deleteUsers);

module.exports = router;