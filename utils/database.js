import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
    try {
        console.log(process.env.MONGO_URL);
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO_URL);
        connection.isConnected = db.connections[0].readyState;
        console.log(connection);
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
};


