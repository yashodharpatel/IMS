import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    college: {
        type: String,
        required: [true, "Please provide a college name"],
    },
    contact: {
        type: String,
        required: [false],
    },
    city: {
        type: String,
        required: [false],
    },
    role : {
        type: String,
        required: [true, "Please provide a role"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;