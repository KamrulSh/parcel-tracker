import express from "express";
import models from "./models/index.js";
import mongoose from "mongoose";

const port = 3000;
const app = express();

app.use(express.json());

const log = (msg) => console.log(msg);
const uri = "mongodb://localhost:27017/parcelTracker";
const options = {};
const connectWithMongoDb = () => {
    mongoose
        .connect(uri)
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.error(err);
        });
};

connectWithMongoDb();

app.post("/", (req, res) => {
    //const body = JSON.stringify(req.body);
    const user = new models.User({
        userName: req.body.userName,
        createdAt: new Date(),
    });
    user.save()
        .then((savedUser) => {
            res.status(201).send("user saved id: " + savedUser._id);
        })
        .catch((error) => {
            res.status(500).send("error" + error);
        });
    //res.send("This is post " + req.body);
});

app.get("/", (req, res) => {
    //const param = JSON.stringify(req.query);
    res.status(200).send("Hello world prople " + req.query.id);
});

app.listen(port, () => {
    console.log("Listening", port);
});

log(models);
