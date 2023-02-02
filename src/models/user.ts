import mongoose, {Schema, Document} from "mongoose";

export interface user {
  username: string;
  password: string;
}

export interface userModel extends user, Document {}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<userModel>("User", userSchema);
