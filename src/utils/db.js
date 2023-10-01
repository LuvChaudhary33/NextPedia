import mongoose from "mongoose";

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO)
        mongoose.set('strictQuery', true);
    } catch (err) {
        throw new Error("Connection failed!")
    }
}

export default connect