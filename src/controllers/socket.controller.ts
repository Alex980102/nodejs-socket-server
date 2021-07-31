import User from '../models/user.model';

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