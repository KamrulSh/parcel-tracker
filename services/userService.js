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

export const updateUser = async (user) => {
    const id = user._id;
    const User = models.User;
    let model = await User.findById(id);
    if (model) {
        model.userName = user.userName;
        model.save();
        return model;
    }
    return null;
};

export const deleteUserById = async (id) => {
    const User = models.User;
    const delUser = User.deleteOne(id);
    return delUser;
};
