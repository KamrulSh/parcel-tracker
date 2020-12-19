import models from "../models";

export const saveUser = async (user) => {
    const model = new models.User({
        userName: user.userName,
        createdAt: new Date(),
    });
    const savedUser = await model.save();
    return savedUser;
};

export const getAllusers = async () => {
    const User = models.User;
    const users = await User.find();
    return users;
};
