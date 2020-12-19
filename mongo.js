import mongoose from "mongoose";

const log = (msg) => console.log(msg);
const uri = "mongodb://localhost:27017/parcelTracker";
const options = {};

const connectWithMongoDb = () => {
    mongoose.connect(uri, options, (err, db) => {
        if (err) {
            console.error(err);
        } else {
            log("Database connected");
        }
    });
};

export default connectWithMongoDb;
