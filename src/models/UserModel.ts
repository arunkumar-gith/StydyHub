import mongoose, { Document, Schema, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    number: number;
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        number: { type: Number, required: true }
    },
    {
        timestamps: true,
        collection: "users",
    }
);

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default UserModel;