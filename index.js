import express from "express";
import connectWithMongoDb from "./mongo";
import configure from "./controllers";

const port = 3000;
const app = express();

app.use(express.json());


connectWithMongoDb();
configure(app);

app.listen(port, () => {
    console.log("Listening", port);
});
