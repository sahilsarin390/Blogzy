import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    creator: String,
    avatar: Buffer,
});

const User = mongoose.model('User', userSchema);

export default User;