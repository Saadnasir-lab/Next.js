import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema({
    site: String,
    username: String,
    password: String
});

// export const Password = mongoose.model('Password', PasswordSchema);
export const Password = mongoose.models.Password || mongoose.model('Password', PasswordSchema);
