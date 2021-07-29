import { Document, Model, model, Schema } from 'mongoose';

/**
 * Interface to model the User Schema for TypeScript.
 * @param name:string
 * @param email:string
 * @param password:string
 * @param online:boolean
 */
export interface IUser extends Document {
    name: string
    email: string;
    password: string;
    online: boolean;
}

const UserSchema: any = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    online: {
        type: Boolean,
        default: false
    }
});

UserSchema.method('toJSON', function(){
    const {__v, _id, password, ...object} = this.toObject();
    object.uid = _id;
    return object;
});

const User: Model<IUser> = model("User", UserSchema);

export default User;