import { Document, Model, model, Schema } from 'mongoose';

/**
 * Interface to model the User Schema for TypeScript.
 * @param name:string
 * @param email:string
 * @param password:string
 * @param online:boolean
 */
export interface IMessage extends Document {
    from: string;
    to: string;
    message: string;
}

const MessageSchema: any = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

MessageSchema.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    return object;
});

const Messages: Model<IMessage> = model("Message", MessageSchema);

export default Messages;