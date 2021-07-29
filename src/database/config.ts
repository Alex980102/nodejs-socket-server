import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        console.error(error);
        throw new Error('Data base connection error check log console');
    }
};

export default dbConnection;