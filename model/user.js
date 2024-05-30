import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, index: true },
    email: { type: String, index: true },
    password: {
        type: String,
        default: ""
    },
},
    {
        timestamps: true,
        versionKey: false
    },
);


const User = models?.User || model("User", UserSchema);

export default User;

