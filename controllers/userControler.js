import express from "express";
import {
    deleteUserById,
    getAllusers,
    saveUser,
    updateUser,
} from "../services/userService";

const router = express.Router();

const getHandler = async (req, res) => {
    const users = await getAllusers();
    res.status(200).send(users);
};
const postHandler = async (req, res) => {
    const body = req.body;
    const user = await saveUser(body);
    res.status(201).send(user._id);
};

const putHandler = async (req, res) => {
    const body = req.body;
    const user = await updateUser(body);
    res.status(200).send(user._id);
};

const deleteHandler = async (req, res) => {
    const id = req.params.id;
    const user = await deleteUserById(id);
    res.status(200).send("User deleted");
};

router.post("/", postHandler);
router.get("/", getHandler);
router.put("/", putHandler);
router.delete("/", deleteHandler);

const configure = (app) => {
    app.use("/users", router);
};

export default configure;
