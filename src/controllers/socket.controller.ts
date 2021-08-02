import User from '../models/user.model';
import Message, { IMessage } from '../models/message.model';

export const userConnected = async (uid: string) => {
    const user = await User.findById(uid);
    user.online = true;
    await user.save();
    return user;
}
export const userDisconnected = async (uid: string) => {
    const user = await User.findById(uid);
    user.online = false;
    await user.save();
    return user;
}
export const saveMessage = async (payload: IMessage) => {
    try {
        const message = new Message(payload);
        console.log(message);
        await message.save();
        return true;
    } catch (error) {
        return false;
    }
}