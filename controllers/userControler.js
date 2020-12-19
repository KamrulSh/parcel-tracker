import express from "express";
import { getAllusers, saveUser } from "../services/userService";

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

router.post("/", postHandler);
router.get("/", getHandler);

const configure = (app) => {
    app.use("/users", router);
};

export default configure;
