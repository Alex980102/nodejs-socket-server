const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB online');
    } catch (error) {
        console.error(error);
        throw new Error('Data base connection error check log console');
    }
};

// Export Modules
module.exports = {dbConnection};
// Export Modules