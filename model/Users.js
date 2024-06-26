import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
